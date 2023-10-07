import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ createTodo }) => {
    const [ task, setTask] = useState('');

    const handleChange = e => {
        setTask( e.target.value );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTodo ({ task, id: uuid() });
        setTask('');
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="task">Task:</label>
                <input 
                id="task"
                type="text"
                name="task"
                value={ task }
                onChange={ handleChange }
                />
                <button>Add a todo!!!</button>
            </form>
        </div>
    )
}

export default NewTodoForm;