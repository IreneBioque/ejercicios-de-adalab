import { useState } from 'react';
import '../styles/App.scss';

const App = () => {
  const [giftWrap, setGiftWrap] = useState(false);

  const handleGiftWrap = (ev) => {
    setGiftWrap(ev.target.checked);
  };

  return (
    <div>
      <form>
        <label htmlFor='giftWrap'>
          Selecciona los ingredientes de la tortilla de patatas
        </label>
        <br />
        <label>Macarrones</label>
        <input type='checkbox' name='gitWrap' id='gitWrap' />
        <label>Patatas</label>
        <input
          type='checkbox'
          name='gitWrap'
          id='gitWrap'
          onChange={handleGiftWrap}
        />
        <label>Nueces</label>
        <input type='checkbox' name='gitWrap' id='gitWrap' />
        <label>Huevos</label>
        <input
          type='checkbox'
          name='gitWrap'
          id='gitWrap'
          onChange={handleGiftWrap}
        />
        <label>Cebolla</label>
        <input
          type='checkbox'
          name='gitWrap'
          id='gitWrap'
          onChange={handleGiftWrap}
        />
        <label>Cerveza</label>
        <input type='checkbox' name='gitWrap' id='gitWrap' />
        <p>
          {giftWrap === true
            ? 'Eres una persona concebollista'
            : 'Eres un robot sin paladar'}
        </p>
      </form>
    </div>
  );
};

export default App;
