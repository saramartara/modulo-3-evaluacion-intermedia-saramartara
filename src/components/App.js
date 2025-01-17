import React, { useState } from 'react';
import '../stylesheets/App.scss';
import data from '../data/data.json';
import PokeList from './PokeList';

const App = () => {
  const [pokemon] = useState(data);

  return (
    <div className="App">
      <h1 className="title">My Pokemon List</h1>
      <PokeList getPokemons={pokemon} />
    </div>
  );
};

export default App;
