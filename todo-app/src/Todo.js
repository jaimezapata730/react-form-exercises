import React, { useState } from "react";

const Todo = ({ task = "default todo", id = "1", remove, update }) => {
    const [ editTask, setEditTask ] = useState( task );
    const [isEditing, setIsEditing] = useState( false );

    const handleEdit = () => {
        setIsEditing( edit => !edit);
    };

    const handleChange = e => {
        setEditTask(e.target.value);
    };

    const handleDelete = () => remove(id);

    const handleUpdate = (e) => {
        e.preventDefault();
        handleUpdate( id, editTask );
        setIsEditing( false );
    };

    let jsx = (
        <div>
            <li>{ task }</li>
            <button onClick={ handleEdit }>Edit</button>
            <button onClick={ handleDelete }>X</button>
        </div>
    );

    if ( isEditing ) {
        <div>
            <form onSubmit={ handleUpdate }>
                <input 
                    type="text"
                    value={ editTask }
                    onChange={ handleChange }
                />
                <button>Update!</button>
            </form>
        </div>
    }
}

export default Todo;