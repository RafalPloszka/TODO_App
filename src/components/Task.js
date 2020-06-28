import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext';

const Task = ({task}) => {
    const {removeTask, findItem, doTask} = useContext(TaskListContext);

    return (
        <li className={`list-item-${task.done}`}>
            <div>
                <button onClick={() => {doTask(task.title, task.id, task.done)}} className="btn-delete task-btn">
                    {task.done ? (<i className="far fa-check-square"></i>) : (<i className="far fa-square"></i>)}
                </button>
                {task.title}
            </div>
            <div>
                <button onClick={() => {removeTask(task.id)}} className="btn-delete task-btn" title="Delete">
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button onClick={() => {findItem(task.id)}} className="btn-edit task-btn" title="Edit">
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task

