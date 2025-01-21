import { useState, useEffect } from 'react';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

const apiKey = import.meta.env.POKEMON_API_KEY;
const POKEMONTYPES = ['', 'Fire', 'Water', 'Grass', 'Electric', 'Dragon', 'Rock', 'Ghost'];

export default function App() {
  const [type, setType] = useState('');

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards', {
      headers: {
        'X-Api-Key': apiKey,
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
  })
  // use type variable to fetch a data from API request - useEffect

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <p>{type}</p>
      <PokemonTypeButtons callback={setType} types={POKEMONTYPES} />
    </>
  )
}
