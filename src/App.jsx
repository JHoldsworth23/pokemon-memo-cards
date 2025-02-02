import { useState, useEffect } from 'react';
import PokemonCards from './components/pokemon-cards';
import DifficultyButtons from './components/difficulty-buttons';
import PokemonTypeButtons from './components/pokemon-types-buttons';
import './App.css';

// POKEMON ICONS
import allTypes from "./assets/all-type.png";
import fireType from "./assets/fire-type.png";
import waterType from "./assets/water-type.png";
import grassType from "./assets/grass-type.png";
import lightningType from "./assets/lightning-type.png";
import dragonType from "./assets/dragon-type.png";
import fightingType from "./assets/fighting-type.png";
import darknessType from "./assets/darkness-type.png";
import metalType from "./assets/metal-type.png";
import psychicType from "./assets/psychic-type.png";

const apiKey = import.meta.env.POKEMON_API_KEY;

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [gameMode, setGameMode] = useState({ status: 'menu', gameOver: false, win: false });
  const [isFlipped, setIsFlipped] = useState(false);
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

  function shuffleAndSlice(arr, difficultyMode) {
    let cardNum = difficultyMode === 'easy' ? 10 : difficultyMode === 'normal' ? 18 : 30;

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  
    return arr.slice(0, cardNum);
  }

  function checkPokemonCard(pokemonId, cards) {
    setIsFlipped(true);

    if (!selectedPokemon.includes(pokemonId)) {
      setSelectedPokemon([...selectedPokemon, pokemonId]);
      console.log(selectedPokemon);
    } else if (selectedPokemon.length === cards.length) {
      setGameMode({ ...gameMode, win: true });
      console.log('YOU WON!');
    } else {
      setGameMode({ ...gameMode, gameOver: true });
      console.log('GAME OVER');
    }

    setTimeout(() => {
      setPokemon(shuffleAndSlice(cards, difficulty));
    }, 800);
    
    setTimeout(() => {
      setIsFlipped(false);
    }, 1300);    
  }

  function startGame(difficultyMode, array, gameStatus) {
    setDifficulty(difficultyMode);
    setPokemon(array);
    setGameMode({ ...gameMode, status: gameStatus });
  }

  const POKEMONTYPES = [
    { type: '', icon: allTypes }, 
    { type: 'Fire', icon: fireType }, 
    { type: 'Water', icon: waterType }, 
    { type: 'Grass', icon: grassType }, 
    { type: 'Lightning', icon: lightningType }, 
    { type: 'Dragon', icon: dragonType }, 
    { type: 'Fighting', icon: fightingType }, 
    { type: 'Darkness', icon: darknessType }, 
    { type: 'Metal', icon: metalType }, 
    { type: 'Psychic', icon: psychicType },
  ];

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      {gameMode.status == 'start' && (
        <>
          <p>Score: {`${selectedPokemon.length} / ${pokemon.length}`}</p>
          <div className={'all-pokemon-cards ' + difficulty}>
            <PokemonCards cards={pokemon} difficulty={difficulty} onClick={checkPokemonCard} isFlipped={isFlipped} />
          </div>
          {(gameMode.gameOver || gameMode.win) && (
            // this is a dialog modal to navigate the setting
            <div>
              <p>GAME OVER</p>
              <div>
                TWO BUTTONS TO RESET THE GAME OR SELECT NEW DIFFICULTY OR TYPE
              </div>
            </div>
            )
          }
        </>
        )
      }
      {gameMode.status == 'menu' && (
        <>
          <DifficultyButtons cards={pokemon} onClick={startGame} />
            <p>{type}</p>
          <PokemonTypeButtons onClick={setType} types={POKEMONTYPES} />
        </>
        )
      } 
    </>
  )
}
