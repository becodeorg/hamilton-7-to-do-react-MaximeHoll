import React, { useRef, useState } from "react";
export default function Form() {
    const inputRef = useRef();
    const [newItem, setNewItem] = useState("");
    function clickHandler() {
         let inputElement = inputRef.current;

       
        
        setNewItem(inputElement.value);
        return newItem;
      }
    return {
        newItem,
        render: (<div>
                <input ref={inputRef} placeholder="Type a new todo..."></input>
                <button onClick={clickHandler}>Add Todo</button>
            </div>
    )}
 }


