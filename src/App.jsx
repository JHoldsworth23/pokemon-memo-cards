import { useState } from 'react';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

const POKEMONTYPES = ['', 'Fire', 'Water', 'Grass', 'Electric', 'Dragon', 'Rock', 'Ghost'];

export default function App() {
  const [type, setType] = useState('');

  // use type variable to fetch a data from API request - useEffect

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <p>{type}</p>
      <PokemonTypeButtons callback={setType} types={POKEMONTYPES} />
    </>
  )
}
