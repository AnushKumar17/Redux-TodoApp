import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function TaskList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [completedTasks, setCompletedTasks] = useState([])

    const handleCheckboxChange = (id) => {
        if (completedTasks.includes(id)) {
            setCompletedTasks(completedTasks.filter(taskId => taskId !== id))
        } else {
            setCompletedTasks([...completedTasks, id])
        }
    }

    return (
        <>
            {todos.length === 0 ? (
                <div><br/><p className='text-gray-800'>No tasks found. Please add a task!</p></div>
            ) : (
                <ul className="list-none">
                    {todos.map((todo) => (
                        <li
                            className={`mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded`}
                            key={todo.id}
                        >
                            <div className='text-white bg-gray-800' style={{ textDecoration: completedTasks.includes(todo.id) ? 'line-through white solid' : 'none'}}>
                                <input
                                    type="checkbox"
                                    onChange={() => handleCheckboxChange(todo.id)}
                                    checked={completedTasks.includes(todo.id)}
                                    className="mr-2"
                                />
                                {todo.text}
                            </div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-md"
                                style={{textDecoration: 'none'}} // Add this line to remove line-through style from delete button
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default TaskList
