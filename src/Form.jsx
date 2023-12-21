import useTodoStore from "./Store";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Form = () => {
    const [newTodo, setNewTodo] = useState('');
  const { todos, addTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-4">Todo App</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 w-3/4 mr-2"
            placeholder="Add new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded text-nowrap"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index} className="flex items-center mb-2 justify-between">
              <span className="mr-2">{todo}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteTodo(index)}
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Form;
