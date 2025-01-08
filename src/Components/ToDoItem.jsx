import React, { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleCompleted, editTodo }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(todo.task);

  const handleEdit = () => {
    if (editMode && editedTask.trim() !== "") {
      editTodo(todo.id, editedTask); 
    }
    setEditMode(!editMode); 
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4  rounded-lg shadow-md  transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleCompleted(todo.id)}
          className="w-5 h-5 accent-blue-500"
        />
        {editMode ? (
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`text-lg ${todo.completed ? "line-through text-gray-400" : ""}`}
          >
            {todo.task}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors duration-200"
        >
          Delete
        </button>
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          {editMode ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
