import { useState } from 'react';
import './App.css'

export default function App() {
  const [type, setType] = useState('');
  
  const pokemonTypes = [
    '',
    'fire',
    'water',
    'grass',
    'electric',
    'dragon',
    'rock',
    'ghost'
  ];

  return (
    <>
      <h1>Pokémon Memo Cards</h1>
      <p>{type}</p>
      {pokemonTypes.map((pokemonType, idx) =>
          <button key={idx} onClick={() => {setType(pokemonType ? pokemonType : "All")}}>
            {pokemonType ? pokemonType : "All"}
          </button>
      )}
    </>
  )
}
