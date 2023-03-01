import ReactDOM from 'react-dom';
import { TodoForm } from '../TodoForm';
import './modal.css';

function Modal( {children} ) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            <TodoForm>
                
            </TodoForm>
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};