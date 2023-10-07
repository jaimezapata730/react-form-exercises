import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ createBox }) => {
    const INITIAL_STATE = {
        height: '',
        width: '',
        backgroundColor: ''
    };

    const [ formData, setFormData ] = useState( INITIAL_STATE )
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData ( formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createBox({ ...formData, id: uuid() });
        setFormData( INITIAL_STATE )
    };
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        onChange={ handleChange }
                        type="text"
                        name="height"
                        value={ formData.height }
                        id="height"
                    />
                    <label htmlFor="width">Width</label>
                    <input 
                        onChange={ handleChange }
                        type="text"
                        name="width"
                        id="width"
                        value={ formData.width }
                    />
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input 
                        onChange={ handleChange }
                        type="text"
                        name="backgroundColor"
                        value={ formData.backgroundColor }
                        id="backgroundColor"
                    />
                </div>
                <button id="newBoxButton">Add a Box!!</button>
            </form>
        </div>
    )
}

export default NewBoxForm;