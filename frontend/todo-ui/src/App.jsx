import { useEffect, useState } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo
} from "./api";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    await addTodo({ title, completed: false });
    setTitle("");
    loadTodos();
  };

  const toggleComplete = async (todo) => {
    await updateTodo(todo.id, {
      title: todo.title,
      completed: !todo.completed
    });
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
  };

  const saveEdit = async (todo) => {
    await updateTodo(todo.id, {
      title: editingTitle,
      completed: todo.completed
    });
    setEditingId(null);
    setEditingTitle("");
    loadTodos();
  };

  return (
    <div className="app-container">
      <h2>Todo App</h2>

      <div className="add-section">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new todo..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <div className="todo-left">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo)}
              />

              {editingId === todo.id ? (
                <input
                  className="edit-input"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  onBlur={() => saveEdit(todo)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && saveEdit(todo)
                  }
                  autoFocus
                />
              ) : (
                <span
                  className={`todo-title ${
                    todo.completed ? "completed" : ""
                  }`}
                  onClick={() => startEdit(todo)}
                >
                  {todo.title}
                </span>
              )}
            </div>

            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;