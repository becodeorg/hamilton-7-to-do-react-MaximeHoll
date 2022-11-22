import TodoItem from "./todoItem";
import React, { useRef, useState } from "react";


export default function TodoList({name, isComplete, onToggle}) {
  
  //   const initialTodos = [];
  //   const [todos, setTodos] = useState(initialTodos);

    

  //  function completeTodo() {
  //     // let updatedTodos = todos.map(todo => {
  //     //   if (todo.key === id) {
  //     //     todo.isComplete = !todo.isComplete;
  //     //   }
  //     //   return todo;
  //     // });
  //     // setTodos(updatedTodos);
  //     // console.log(updatedTodos);
  //     // localStorage.setItem("localTasks", JSON.stringify(updatedTodos))
  //     console.log("checked");
  //   };


  //   return (<ul>
  //       {todos.map((todo) => (
  //         <li key={todo.key} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
  //           <input type="checkbox" 
  //           id={todo.key}
  //           onChange={() => completeTodo(todo.key)}
  //           defaultChecked={todo.isComplete}
  //           /> 
  //           <label>{todo.name}</label> 
  //         </li>
  //       ))}
  //     </ul>)

    return (
      <div>
         <input type="checkbox" 
            onClick={() => onToggle(!isComplete)}
            defaultChecked={isComplete}
            /> <label>{name}</label>
      </div>
    )
 }

///lifting from todo