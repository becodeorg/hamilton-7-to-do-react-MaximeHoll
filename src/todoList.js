import TodoItem from "./todoItem";


export default function TodoList() {
    return <div className="todosList">
                <h4>Todos</h4>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
 }