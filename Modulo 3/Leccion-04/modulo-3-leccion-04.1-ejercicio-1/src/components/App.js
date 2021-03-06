import '../styles/App.scss';
// import { useEffect, useState } from 'react';

import ls from '../services/localStorage';
console.log(ls);
function App() {
  const tasks = [
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ];
  const renderTask = () => {
    return tasks.map((task, index) => {
      return (
        <li className={task.completed ? 'done' : ''} key={index}>
          {task.task}
        </li>
      );
    });
  };
  // const localStorageTasks = ls.get(tasks);
  // console.log(localStorageTasks);
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTask()}</ol>
    </div>
  );
}

export default App;
