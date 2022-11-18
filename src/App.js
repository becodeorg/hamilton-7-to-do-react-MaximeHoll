import logo from './logo.svg';
import './App.css';
import InputField from "./input";
import AddTodo from './button';
import TodoList from './todoList';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
        <div>
          <InputField />
          <br></br>
          <AddTodo />
        </div>
          <TodoList />
      
    </div>
  );
}

export default App;
