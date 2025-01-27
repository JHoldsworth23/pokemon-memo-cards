import { useState, useEffect } from 'react';
import shuffleAndSlice from './script/shuffle-and-slice';
import PokemonCards from './components/pokemon-cards';
import DifficultyButtons from './components/difficulty-buttons';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

const apiKey = import.meta.env.POKEMON_API_KEY;
const POKEMONTYPES = ['', 'Fire', 'Water', 'Grass', 'Lightning', 'Dragon', 'Fighting', 'Darkness', 'Metal', 'Psychic'];
let POKEMONCARDS = [];
// make a global variable for gameplay - checking if the game is on or over

function checkPokemonCard(pokemonId) {
  if (!POKEMONCARDS.includes(pokemonId)) {
    POKEMONCARDS.push(pokemonId);
    console.log(POKEMONCARDS);
  } else {
    console.log('GAME OVER');
  }
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

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <p>Score: {`${POKEMONCARDS.length} / ${pokemon.length}`}</p>
      <div className={'all-pokemon-cards ' + difficulty}>
        <PokemonCards cards={pokemon} difficulty={difficulty} onClick={checkPokemonCard} setState={setPokemon}/>
      </div>     
      <DifficultyButtons onClick={setDifficulty} />
      <p>{type}</p>
      <PokemonTypeButtons onClick={setType} types={POKEMONTYPES} />
    </>
  )
}
