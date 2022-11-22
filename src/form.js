import React, { useRef, useState } from "react";

export default function Form({onAdd}) {
    const inputRef = useRef();
    const [newItem, setNewItem] = useState("");
    function clickHandler() {
         let inputElement = inputRef.current;

       
        
        setNewItem(inputElement.value);
        return newItem;
      }
      function handleSubmit(e) {
          e.preventDefault();
          onAdd(newItem);
      }
    return (
                <form onSubmit={handleSubmit}>
                <input ref={inputRef} placeholder="Type a new todo..."></input>
                <button onClick={clickHandler}>Add Todo</button>
                </form>
    )
 }


