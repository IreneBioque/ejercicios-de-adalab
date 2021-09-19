import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [open, setOpen] = useState('hidden');
  const renderHidden = () => {
    if (open === 'hidden') {
      // debugger;
      setOpen('nohidden');
    } else {
      setOpen('hidden');
    }
  };
  return (
    <div>
      <div onClick={renderHidden}>Menu</div>
      <nav className={open}>
        <div onClick={renderHidden}>Flecha</div>
        <ul>
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
