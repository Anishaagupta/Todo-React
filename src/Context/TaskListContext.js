import React, { createContext, useState } from 'react';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTask] = useState([
    { title: 'Read a book', id: 1 },
    { title: 'Have Dinner', id: 2 },
    { title: 'Buy Vegetables', id: 3 },
    { title: 'Code a program', id: 4 },
    { title: 'Call a friend', id: 5 },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
