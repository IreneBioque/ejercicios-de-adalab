import { useState } from 'react';
import '../styles/App.scss';
import data from './data.json';

function App() {
  const [persons, setPersons] = useState(data);
  const [searchName, setSearch] = useState('');
  const [newData, setNewData] = useState({
    name: '',
    lastname: '',
    phone: '',
    email: '',
  });

  console.log(persons);

  const handleInput = (ev) => {
    setSearch(ev.target.value);
  };
  const handleAddPersons = (ev) => {
    if (ev.currentTarget.id === 'name') {
      setNewData({ ...newData, name: ev.currentTarget.value });
    } else if (ev.currentTarget.id === 'lastname') {
      setNewData({ ...newData, lastname: ev.currentTarget.value });
    } else if (ev.currentTarget.id === 'phone') {
      setNewData({ ...newData, phone: ev.currentTarget.value });
    } else if (ev.currentTarget.id === 'email') {
      setNewData({ ...newData, email: ev.currentTarget.value });
    }
  };
  const handleClick = (ev) => {
    ev.preventDefault();
    setPersons([...persons, newData]);
    // para vaciar los inputs

    // setNewData({
    //   name: '',
    //   lastname: '',
    //   phone: '',
    //   email: '',
    // });
  };
  const renderPerson = () => {
    return persons
      .filter((person) => {
        return (
          person.name.toLowerCase().includes(searchName.toLowerCase()) ||
          person.lastname.toLowerCase().includes(searchName.toLowerCase())
        );
      })
      .map((person, i) => {
        return (
          <li className='contact__item' key={i} id={i}>
            <p className='contact__name'>
              <label className='contact__label'>Nombre:</label>
              {person.name + ' ' + person.lastname}
            </p>
            <p className='contact__phone'>
              <label className='contact__label'>Teléfono:</label>
              <a href='tel:603256289' title='Pulsa aquí para llamar a Lola'>
                {person.phone}
              </a>
            </p>
            <p className='contact__mail'>
              <label className='contact__label'>Email:</label>
              <a
                href='mailto:lmartinez@adalab.es'
                title='Pulsa aquí para escribir a Lola'
              >
                {person.email}
              </a>
            </p>
          </li>
        );
      });
  };
  console.log(renderPerson());
  return (
    <div className='page'>
      {/* header */}
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form>
          <input
            onChange={handleInput}
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            placeholder='Filtrar contactos por nombre'
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className='contact__list'>{renderPerson()}</ul>

        {/* new contact */}
        <form className='new-contact__form'>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            onChange={handleAddPersons}
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            value={newData.name}
            placeholder='Nombre'
          />
          <input
            onChange={handleAddPersons}
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            value={newData.lastname}
            placeholder='Apellidos'
          />
          <input
            onChange={handleAddPersons}
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            value={newData.phone}
            placeholder='Teléfono'
          />
          <input
            onChange={handleAddPersons}
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            value={newData.email}
            placeholder='Email'
          />
          <input
            className='new-contact__btn'
            type='submit'
            value='Añadir'
            onClick={handleClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
