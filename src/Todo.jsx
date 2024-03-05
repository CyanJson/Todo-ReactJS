import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "./redux/todoSlice";

import Plus from './assets/plus.svg';
import TodoItem from "./components/TodoItem";

const Todo = () => {
    const [text, setText] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => setText(e.target.value);

    const handleAddTodo = () => {
        if(text){
            dispatch(addTodo(text));
            setText('');
        }
    }

    const handleToggleComplete = (id) => dispatch(toggleComplete(id));
    
    const handleDeleteTodo = (id) => dispatch(deleteTodo(id));

    return(
        <div className="todo-container">
            <header>
                <h3>To-Do ReactJS</h3>
            </header>
            <div className="inputs">
                <input type="text" value={text} maxLength={20} onChange={handleInputChange}/>
                <button className="addBtn" onClick={handleAddTodo}>
                    <img src={Plus} alt="plus" />
                    Add To Do
                </button>
            </div>
            {todos.map((todo) => (
                <TodoItem
                    key={todo}
                    text={todo.text}
                    completed={todo.completed}
                    toggleComplete={() => handleToggleComplete(todo.id)}
                    deleteTodo={() => handleDeleteTodo(todo.id)}
                />
            ))}
        </div>
    );
}

export default Todo;