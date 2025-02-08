import { useState, useEffect } from 'react';
import Loading from './components/loading';
import Navigation from './components/navigation';
import GameInterface from './components/game-interface';
import Modal from './components/modal';
import './App.css';

const apiKey = import.meta.env.POKEMON_API_KEY;
window.localStorage.setItem('score', 0);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [gameMode, setGameMode] = useState({ status: 'menu', gameOver: false, win: false });
  const [isFlipped, setIsFlipped] = useState(false);
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    setLoading(true);
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
      setTimeout(() => setLoading(false), 7000);
  }, [type]);

  function shuffleAndSlice(arr, difficultyMode) {
    let cardNum = difficultyMode === 'easy' ? 10 : difficultyMode === 'normal' ? 18 : 30;

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  
    return arr.slice(0, cardNum);
  }

  function updateBestScore(newScore) {
    const oldHighScore = parseFloat(localStorage.getItem('score'));
    if (oldHighScore === null || oldHighScore < newScore) localStorage.setItem('score', newScore);
  }

  function checkPokemonCard(pokemonId, cards) {
    setIsFlipped(true);

    if (!selectedPokemon.includes(pokemonId)) {
      setSelectedPokemon([...selectedPokemon, pokemonId]);
      console.log(selectedPokemon);
    } else if (selectedPokemon.length === cards.length) {
      setGameMode({ ...gameMode, win: true });
      updateBestScore(selectedPokemon.length);
      console.log('YOU WON!');
    } else {
      setGameMode({ ...gameMode, gameOver: true });
      updateBestScore(selectedPokemon.length);
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

  function resetGame() {
    setGameMode({ ...gameMode, gameOver: false, win: false });
    setSelectedPokemon([]);
  }

  function newGame() {
    setType('');
    setGameMode({ status: 'menu', gameOver: false, win: false });
    setSelectedPokemon([]);
  }

  return (
    <>
      {loading && <Loading isLoading={loading} />}
      {/* TITLE COMPONENT */}
      <h1>Pokémon Memo Cards</h1>
      {gameMode.status == 'menu' ? (
        <Navigation 
          pokemon={pokemon} 
          startGame={startGame} 
          setType={setType}
          pokemonType={type} 
        />
        ) : (
          <>
          <GameInterface 
            pokemon={pokemon}
            selectedPokemon={selectedPokemon}
            gameMode={gameMode}
            difficulty={difficulty}
            checkPokemonCard={checkPokemonCard}
            isFlipped={isFlipped}
            resetGame={resetGame}
            newGame={newGame}
          />
          {((gameMode.gameOver || gameMode.win)) && <Modal resetGame={resetGame} newGame={newGame} />}
          </>
        )
      }
    </>
  )
}
