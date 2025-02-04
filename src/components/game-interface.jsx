/* eslint-disable react/prop-types */
import PokemonCards from "./pokemon-cards";

export default function GameInterface({ 
    pokemon, 
    selectedPokemon,
    gameMode,
    difficulty,
    checkPokemonCard,
    isFlipped
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
          {((gameMode.gameOver || gameMode.win)) && (
            // this is a dialog modal to navigate the setting
            <div>
              <p>GAME OVER</p>
              <div>
                TWO BUTTONS TO RESET THE GAME OR SELECT NEW DIFFICULTY OR TYPE
              </div>
            </div>
          )}
        </>
    )
}