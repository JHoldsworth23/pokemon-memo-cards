import { useState, useEffect } from 'react';
import PokemonCards from './components/pokemon-cards';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

const apiKey = import.meta.env.POKEMON_API_KEY;
const POKEMONTYPES = ['', 'Fire', 'Water', 'Grass', 'Lightning', 'Dragon', 'Fighting', 'Darkness', 'Metal', 'Psychic'];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');

  useEffect(() => {
    const query = type ? `?q=types:${type}` : '';
    fetch(`https://api.pokemontcg.io/v2/cards${query}`, {
      headers: {
        'X-Api-Key': apiKey,
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Fetching a data...");
        const pokemonData = data.data;
        shuffle(pokemonData)
        // shuffle pokemon array and slice
        // setPokemon(pokemonData);
        // temporary display for 10 cards
        setPokemon(pokemonData.slice(0, 10));
      })
      .catch(err => console.log(err.message));
  }, [type]);
  // array dependency - type
  // use type variable to fetch a data from API request - useEffect

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <PokemonCards array={pokemon} />
      <p>{type}</p>
      <PokemonTypeButtons callback={setType} types={POKEMONTYPES} />
    </>
  )
}
