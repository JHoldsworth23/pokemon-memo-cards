/* eslint-disable react/prop-types */
import Scoreboard from "./scoreboard";
import PokemonCards from "./pokemon-cards";

export default function GameInterface({ 
    pokemon, 
    selectedPokemon,
    difficulty,
    checkPokemonCard,
    isFlipped,
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
        </>
    )
}