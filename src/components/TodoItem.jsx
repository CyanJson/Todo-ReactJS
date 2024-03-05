import Check from '../assets/check.svg';
import Cross from '../assets/x.svg';
import Trash from '../assets/trash.svg';

const TodoItem = ({text, completed, toggleComplete, deleteTodo}) => {
    return(
        <div className="todo-item">
            <span style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {text}
            </span>
            <div className="btns">
                <button
                    className="statusBtn"
                    style={{backgroundColor: completed ? 'crimson' : 'rgb(0, 197, 0)'}} 
                    onClick={toggleComplete}
                >
                    {completed 
                    ? <img src={Cross} alt="cross" /> 
                    : <img src={Check} alt="check" />
                    }
                </button>
                <button
                    className="deleteBtn"
                    onClick={deleteTodo}
                >
                    <img src={Trash} alt="trash" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;