import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {
    // FIX: The selector path was incorrect. It should be state.todo.todos
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()

    // State to manage which todo is being edited and its new text
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [newTodoText, setNewTodoText] = useState('');

    const handleUpdateClick = (id) => {
        if (newTodoText.trim()) {
            dispatch(updateTodo({ id: id, text: newTodoText }));
        }
        setEditingTodoId(null);
    };

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              <input
                type="text"
                className="bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full mr-3"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
              />
            ) : (
              <div className='text-white'>{todo.text}</div>
            )}
            <div className="flex items-center space-x-2">
              {editingTodoId === todo.id ? (
                <button
                  onClick={() => handleUpdateClick(todo.id)}
                  className="text-white bg-green-500 border-0 py-1 px-2 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  💾
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditingTodoId(todo.id);
                    setNewTodoText(todo.text);
                  }}
                  className="text-white bg-yellow-500 border-0 py-1 px-2 focus:outline-none hover:bg-yellow-600 rounded text-md"
                >
                  ✏️
                </button>
              )}
              <button
              onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-2 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos