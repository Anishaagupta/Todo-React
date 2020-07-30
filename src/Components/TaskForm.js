import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../Context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={title}
        type='text'
        placeholder='Write Your Task'
        className='task-input'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={clearList} className='btn clear-btn'>
          Delete
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
