import  { useState } from 'react';
import { format } from 'date-fns';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [editingIndex, setEditingIndex] = useState(-1);
  const [showError, setShowError] = useState(false);


  const handleAddTodo = () => {
    if (todoInput.trim() === '') {
      setShowError(true);
      return;
    }
  
    setShowError(false);
    if (editingIndex >= 0) {
      const updatedTodos = [...todos];
      updatedTodos[editingIndex] = { ...updatedTodos[editingIndex], description: todoInput };
      setTodos(updatedTodos);
      setEditingIndex(-1);
    } else {
      setTodos([...todos, { description: todoInput, completed: false }]);
    }
    setTodoInput('');
  };

  const handleEditTodo = (index) => {
    setEditingIndex(index);
    setTodoInput(todos[index].description);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = { ...updatedTodos[index], completed: !updatedTodos[index].completed };
    setTodos(updatedTodos);
  };

  return (
    <div className="p-4 w-1/2 h-80 shadow-md border">
      <div className="flex justify-between items-center mb-4">
  <input
    type="text"
    className="form-input px-4 py-2 border rounded"
    placeholder="Add a new task"
    value={todoInput}
    onChange={(e) => {
      setTodoInput(e.target.value);
      if (showError) setShowError(false);
    }}
    onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
  />
  <button
    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
    onClick={handleAddTodo}
  >
    {editingIndex >= 0 ? 'Update' : 'Add'}
  </button>
</div>
{showError && <p className="text-red-500">Please enter a task description.</p>}

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className={`flex justify-between items-center px-4 py-2 rounded ${todo.completed ? 'bg-green-200' : 'bg-gray-100'}`}>
            <span className={`${todo.completed ? 'line-through' : ''}`}>
              {format(new Date(), 'PP')} - {todo.description}
            </span>
            <div className="flex items-center">
              <button className="mx-1 px-2 py-1 bg-yellow-500 text-white rounded" onClick={() => handleEditTodo(index)}>
                Edit
              </button>
              <button className="mx-1 px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleDeleteTodo(index)}>
                Delete
              </button>
              <button className="mx-1 px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleCompleteTodo(index)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
