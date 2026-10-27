import { useState } from "react";
import "./App.css";

function App() {
const [todos, setTodos] = useState([]);
const [task, setTask] = useState("");

function addTodo(e) {
e.preventDefault();

if (task.trim() === "") return;

setTodos([
  ...todos,
  {
    id: Date.now(),
    text: task,
    completed: false,
  },
]);

setTask("");

}

function toggleTodo(id) {
setTodos(
todos.map((todo) =>
todo.id === id
? { ...todo, completed: !todo.completed }
: todo
)
);
}

function deleteTodo(id) {
setTodos(todos.filter((todo) => todo.id !== id));
}

return (
<div className="app">
<div className="todo-container">
<h1>✨ My Todo App</h1>
<p>Plan your day. Complete your goals.</p>

    <form onSubmit={addTodo}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>

    <h3>My Tasks ({todos.length})</h3>

    {todos.length === 0 ? (
      <p className="empty">
        No tasks yet. Add your first task!
      </p>
    ) : (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>

);
}

export default App;