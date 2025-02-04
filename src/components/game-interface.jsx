/* eslint-disable react/prop-types */
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
          <p>Score: {`${selectedPokemon.length} / ${pokemon.length}`}</p> 
          <PokemonCards 
            cards={pokemon} 
            difficulty={difficulty}
            onClick={checkPokemonCard}
            isFlipped={isFlipped}
          />
        </>
    )
}