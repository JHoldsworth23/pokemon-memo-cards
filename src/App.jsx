import { useState, useEffect } from 'react';
import PokemonCards from './components/pokemon-cards';
import DifficultyButtons from './components/difficulty-buttons';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

const apiKey = import.meta.env.POKEMON_API_KEY;
const POKEMONTYPES = ['', 'Fire', 'Water', 'Grass', 'Lightning', 'Dragon', 'Fighting', 'Darkness', 'Metal', 'Psychic'];

function shuffleAndSlice(arr, difficulty) {
  let cardNum = difficulty === 'easy' ? 10 : difficulty === 'normal' ? 18 : 25;

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.slice(0, cardNum);
}

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

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
        const pokemonArr = shuffleAndSlice(pokemonData, difficulty);
        console.log(pokemonArr, pokemonArr.length);
        setPokemon(pokemonArr);
      })
      .catch(err => console.log(err.message));
  }, [type, difficulty]);
  // array dependency - type and difficulty
  // use type variable to fetch a data from API request - useEffect

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <PokemonCards array={pokemon} />
      <DifficultyButtons callback={setDifficulty} />
      <p>{type}</p>
      <PokemonTypeButtons callback={setType} types={POKEMONTYPES} />
    </>
  )
}
