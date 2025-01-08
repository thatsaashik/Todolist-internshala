import React, { useState } from "react";
import Header from "../Components/Header";
import ToDoList from "../Components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add Todo
  const addTodo = () => {
    if (newTask.trim()) {
      const newTodo = {
        id: Date.now(),
        task: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle Completed
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit Todo
  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    );
  };

  return (
    <div className="App  min-h-screen  flex flex-col items-center p-6">
      <Header />
      <div className="todo-container   p-6 rounded-lg shadow-lg w-full max-w-2xl mt-8">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            onClick={addTodo}
            className="ml-4 p-3 bg-orange-300  text-white rounded-md hover:bg-orange-400 transition-colors duration-200"
          >
            Add 
          </button>
        </div>
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
