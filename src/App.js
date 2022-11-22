import logo from './logo.svg';
import './App.css';
import InputField from "./input";
import AddTodo from './button';
import TodoList from './todoList';
import Form from "./form";
import React, { useState } from "react";






function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);
  function addTodo(name) {
    setTodos(prev => {
      return [...prev, {name:name, key: (Math.random() * 1000), isComplete:false}];

    })
  }
  function updateTodos(todoIndex, newDone) {
      setTodos(prev => {
        const newTodos = [...prev];
        newTodos[todoIndex].isComplete = newDone;
        console.log(newTodos);
        console.log(newDone);
        return newTodos;
      })
  }
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
