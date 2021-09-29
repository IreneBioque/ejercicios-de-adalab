import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';
import Form from "./Form";

const App = () => {
  const [shows, setShows] = useState([]);
  const [searchName, setSearchName] = useState('');

  // useEffect

  useEffect(() => {
    callToApi(searchName).then((response) => {
      setShows(response);
    });
  }, [searchName]);

  const handleSearchName = (value) => {
    setSearchName(value);
  };

  const renderShows = () => {
    return shows.map((show, index) => {
      return <li key={index}>Nombre: {show.name}</li>;
    });
  };

  return (
    <div>
      <h1>Series</h1>

      <Form valueForm={searchName} handleSearchName={handleSearchName} />

      <h2>Personajes con el nombre: {searchName}</h2>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default App;
