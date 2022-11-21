import TodoItem from "./todoItem";
import React, { useState } from "react";


export default function TodoList() {
    const initialTodos = [{name: "My first todo", key: 1, isComplete: false }, {name: "My second todo", key: 2, isComplete: false},];
    const [todos, setTodos] = useState(initialTodos);
    

   function completeTodo(id) {
      let updatedTodos = todos.map(todo => {
        if (todo.key === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      setTodos(updatedTodos);
      console.log(updatedTodos);
      // localStorage.setItem("localTasks", JSON.stringify(updatedTodos))
      
    };


    return (<ul>
        {todos.map((todo) => (
          <li key={todo.key} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
            <input type="checkbox" 
            id={todo.key}
            onChange={() => completeTodo(todo.key)}
            defaultChecked={todo.isComplete}
            /> 
            <label>{todo.name}</label> 
          </li>
        ))}
      </ul>)
 }

