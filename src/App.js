import React from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import TaskListContextProvider from './Context/TaskListContext';
import TaskForm from './Components/TaskForm';
import Header from './Components/Header';

function App() {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
