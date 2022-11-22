import logo from './logo.svg';
import './App.css';
import InputField from "./input";
import AddTodo from './button';
import TodoList from './todoList';
import Form from "./form";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";


const LSKEY = "MyTodoApp";

// () => {
//   // getting stored value
//   const saved = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
//   console.log(saved);
//   console.log(initialTodos);
//   return initialTodos;


function App() {
  const initialTodos = [];

  useEffect(()=>{
    if(localStorage.getItem(LSKEY + ".todos")){
      const storedList = JSON.parse(localStorage.getItem(LSKEY + ".todos"));
      setTodos(storedList);
    }
  },[])
  
  const [todos, setTodos] = useState(initialTodos);
  console.log(todos);


  function addTodo(name) {
    setTodos(prev => {
      return [...prev, {name:name, key: uuidv4(), isComplete:false}];

    })
  }
  function updateTodos(todoIndex, newDone) {
      setTodos(prev => {
        const newTodos = [...prev];
        newTodos[todoIndex].isComplete = newDone;
        console.log(newDone);
        return newTodos;
      })
  }

  useEffect(() => {
    if (todos.length > 0){
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));}
  }, [todos]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
          <Form onAdd={name => addTodo(name)}/>

          {todos.map((todo, index) => (
          <TodoList {...todo} onToggle={isComplete=> updateTodos(index, isComplete)}/>
          ))}
      
    </div>
  );
}

export default App;
