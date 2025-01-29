import { useState, useEffect } from 'react';
import shuffleAndSlice from './script/shuffle-and-slice';
import PokemonCards from './components/pokemon-cards';
import DifficultyButtons from './components/difficulty-buttons';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

const apiKey = import.meta.env.POKEMON_API_KEY;
const POKEMONTYPES = ['', 'Fire', 'Water', 'Grass', 'Lightning', 'Dragon', 'Fighting', 'Darkness', 'Metal', 'Psychic'];
let POKEMONCARDS = [];

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    const query = type ? `?q=types:${type}` : '';
    fetch(`https://api.pokemontcg.io/v2/cards${query}`, {
      headers: {
        'X-Api-Key': apiKey,
        mode: 'cors',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Fetching a data...");
        const pokemonData = data.data;
        const currentPokemon = shuffleAndSlice(pokemonData, 30);
        setPokemon(currentPokemon);
      })
      .catch(err => console.log(err.message));
  }, [type]);

  function checkPokemonCard(pokemonId, cards) {
    setPokemon(shuffleAndSlice(cards, difficulty));

    if (!POKEMONCARDS.includes(pokemonId)) {
      POKEMONCARDS.push(pokemonId);
      console.log(POKEMONCARDS);
    } else {
      console.log('GAME OVER');
    }
  }

  // const currentCards = pokemon;

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <p>Score: {`${POKEMONCARDS.length} / ${pokemon.length}`}</p>
      <div className={'all-pokemon-cards ' + difficulty}>
        <PokemonCards cards={pokemon} difficulty={difficulty} onClick={checkPokemonCard} />
      </div>
      <DifficultyButtons cards={pokemon} onClick={setDifficulty} setPokemon={setPokemon} />
      <p>{type}</p>
      <PokemonTypeButtons onClick={setType} types={POKEMONTYPES} />
    </>
  )
}
