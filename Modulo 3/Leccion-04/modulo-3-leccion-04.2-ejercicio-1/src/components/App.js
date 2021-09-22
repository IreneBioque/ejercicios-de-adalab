import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false,
    },
  ]);
  const handleDone = (ev) => {
    const clickedElementId = ev.currentTarget.id;
    tasks[clickedElementId].completed = !tasks[clickedElementId].completed;
    setTasks([...tasks]);
  };
  const renderTask = () => {
    return tasks.map((task, index) => {
      return (
        <li
          className={task.completed ? 'done' : ''}
          key={index}
          id={index}
          onClick={handleDone}
        >
          {task.task}
        </li>
      );
    });
  };
  return (
    <div>
      <h1>Mi lista de tareas</h1>
      <ol>{renderTask()}</ol>
    </div>
  );
}

export default App;
