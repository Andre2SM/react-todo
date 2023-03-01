import React from "react";
import { FiSquare, FiCheckSquare, FiTrash2 } from "react-icons/fi";
import './TodoItem.css';

function TodoItem(props){    

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                {
                    props.completed ? <FiCheckSquare/> : <FiSquare />
                }
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            ><FiTrash2 /></span>
        </li>
    );
}

export { TodoItem };