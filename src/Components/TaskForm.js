import React from 'react';

const TaskForm = () => {
  return (
    <form className='form'>
      <input
        type='text'
        placeholder='Write Your Task'
        className='task-input'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          Add Task
        </button>
        <button className='btn clear-btn'>Delete</button>
      </div>
    </form>
  );
};

export default TaskForm;
