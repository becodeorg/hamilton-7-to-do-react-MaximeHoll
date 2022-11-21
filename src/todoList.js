import TodoItem from "./todoItem";
import React, { useState } from "react";


export default function TodoList({newItem}) {
  console.log(newItem);
  if(newItem) {
    // let newInitialTodos = [...initialTodos];
    // newInitialTodos.push({name: newItem, key: 3, isComplete: false});
    // setTodos(newInitialTodos);
    console.log("lol");
  }
    const initialTodos = [];
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

///lifting from todo