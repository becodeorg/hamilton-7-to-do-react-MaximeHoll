import TodoItem from "./todoItem";
import React, { useState } from "react";


export default function TodoList() {
    const initialTodos = [{name: "My first todo", complete: false, key: 1 }, {name: "My second todo", complete: false, key: 2},];
    const [todos, setTodos] = useState(initialTodos);
    

    const handleChange = event => {
        if (event.target.checked) {
        console.log("checked")
        console.log(this.complete)
          
        } else {
            console.log("unchecked")
            console.log(this.complete)
        }
       
      };

    return (<ul>
        {todos.map((todo) => (
          <li key={todo.key}>
            <input type="checkbox" 
            
            onChange={handleChange}
            defaultChecked={todo.complete}
            /> 
            {todo.name}
          </li>
        ))}
      </ul>)
 }

