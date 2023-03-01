import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButtom } from "../CreateTodoButton/index.js";
import { Modal } from '../Modal';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI() {

    const { error,
        loading,
        searchedTodos,
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

            { error && <TodosError error={error} /> }
            { loading && <TodosLoading />}
            { (!loading && !searchedTodos.length)  && <EmptyTodos /> }

            <TodoList>           
            {searchedTodos.map( todo => (
                <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ) )}
            </TodoList>

            { !!openModal && (
                <Modal>
                    <p>{searchedTodos[0]?.text}</p>
                </Modal>
            )}

            

        <CreateTodoButtom 
            setOpenModal={setOpenModal}
            openModal={openModal}
        />
        </React.Fragment>
    );
}

export { AppUI };