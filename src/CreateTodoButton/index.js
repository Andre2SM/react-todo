import React from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){

    const onClickButton = () => {
        props.setOpenModal(!props.openModal);
    }


    return(
        <button 
            className={`CreateTodoButton ${props.openModal && 'active'}`}
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButtom};