import logo from './logo.svg';
import './App.css';
import InputField from "./input";
import AddTodo from './button';
import TodoList from './todoList';
import TodoItem from "./todoItem";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Todo App</h1>
      </header>
      <body>
        <div>
          <InputField />
          <br></br>
          <AddTodo />
        </div>
        <TodoList />
      </body>
    </div>
  );
}

export default App;
