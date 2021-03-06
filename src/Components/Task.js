import React, { useContext } from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button onClick={() => findItem(task.id)} className='btn-edit task-btn'>
          <i className='fas fa-pen'>Edit</i>
        </button>

        <button onClick={() => removeTask(task.id)} className='btn-delete task-btn'>
          <i className='fas fa-trash-alt'>Delete</i>
        </button>
      </div>
    </li>
  );
};

export default Task;
