import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const ToDoList = () => {
    const [ todos, setTodos ] = useState([]);

//Add a new todo
    const create = newTodo => {
        setTodos( todos => [ ...todos, newTodo ]);
    };

    // update a todo with updatedTask

    const update = ( id, updateTask ) => {
        setTodos( todos =>
            todos.map( todo => 
                todo.id === id ? { ...todo, task: updateTask} : todo
            )
        );
    };

  // delete a todo by id
    const remove = id => {
        setTodos( todos => todos.filter( todo => todo.id !== id ));
    };

    const todoComponents = todos.map(todo => (
        <Todo
          remove={remove}
          key={todo.id}
          id={todo.id}
          task={todo.task}
          update={update}
        />
      ));
    return (
        <div>
            <NewTodoForm createTodo={ create }/>
            <ul>{ todoComponents }</ul>
        </div>
    );
}

export default ToDoList;