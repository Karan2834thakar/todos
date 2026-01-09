import React from 'react';

const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {todos.length === 0 ? (
        <div className="col-span-full text-center text-white py-12">
          <p className="text-xl">No todos found</p>
        </div>
      ) : (
        todos.map(todo => (
          <div
            key={todo.id}
            className={`p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-200 transform hover:scale-105 ${
              todo.completed
                ? 'bg-green-500 bg-opacity-90'
                : 'bg-white bg-opacity-95'
            }`}
            onClick=
            {() => onToggleTodo(todo.id)}
          >
    
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
                className="w-5 h-5 mt-1 mr-3 cursor-pointer"
              />
              <span className={`text-sm font-semibold ${
                todo.completed
                  ? 'text-white bg-green-700 px-3 py-1 rounded'
                  : 'text-blue-600 bg-blue-100 px-3 py-1 rounded'
              }`}>
                {todo.completed ? 'Done' : 'Pending'}
              </span>
            </div>

         
            <h3 className={`text-lg font-semibold mb-3 ${
              todo.completed
                ? 'text-white line-through'
                : 'text-gray-800'
            }`}>
              {todo.title}
            </h3>

            {/* Todo ID and User Info */}
            <div className={`text-sm ${
              todo.completed
                ? 'text-green-100'
                : 'text-gray-600'
            }`}>
              <p>ID: {todo.id}</p>
              <p>User ID: {todo.userId}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;