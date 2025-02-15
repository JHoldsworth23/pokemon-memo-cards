/* eslint-disable react/prop-types */
import Scoreboard from "./scoreboard";
import PokemonCards from "./pokemon-cards";
import "../style/game-interface.css";

export default function GameInterface({ 
    pokemon, 
    selectedPokemon,
    newGame,
    difficulty,
    checkPokemonCard,
    isFlipped
}) {
    return (
        <>
          <Scoreboard currentScore={selectedPokemon.length} maxScore={pokemon.length} />
          <PokemonCards 
            cards={pokemon} 
            difficulty={difficulty}
            onClick={checkPokemonCard}
            isFlipped={isFlipped}
          />
          <button onClick={() => newGame()}>
            NEW GAME
          </button>
        </>
    )
}