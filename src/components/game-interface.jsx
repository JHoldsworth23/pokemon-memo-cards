/* eslint-disable react/prop-types */
import { useState } from "react";
import Scoreboard from "./scoreboard";
import PokemonCards from "./pokemon-cards";
import GameInterfaceButtons from "./game-interface-buttons";
import "../style/game-interface.css";

export default function GameInterface({ 
    pokemon, 
    selectedPokemon,
    newGame,
    difficulty,
    checkPokemonCard,
    isFlipped
}) {

    const [open, setOpen] = useState(false);

    function openQuery() {
      setOpen(!open);
    }

    return (
        <>
          <Scoreboard currentScore={selectedPokemon.length} maxScore={pokemon.length} />
          <PokemonCards 
            cards={pokemon} 
            difficulty={difficulty}
            onClick={checkPokemonCard}
            isFlipped={isFlipped}
          />
          <GameInterfaceButtons 
            newGame={newGame}
            isOpen={open}
            openQuery={openQuery}
          />
        </>
    )
}