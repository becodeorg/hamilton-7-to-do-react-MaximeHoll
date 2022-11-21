import logo from './logo.svg';
import './App.css';
import InputField from "./input";
import AddTodo from './button';
import TodoList from './todoList';
import Form from "./form";





function App() {
  const {render, newItem} = Form()
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
          {render}

          <TodoList {...newItem}/>
      
    </div>
  );
}

export default App;
