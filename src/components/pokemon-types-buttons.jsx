/* eslint-disable react/prop-types */
import "../style/types-buttons.css";

export default function PokemonTypeButtons({ onClick, types }) {
    return (
        <div className="pokemon-types">
            <p>Select a pokémon type</p>
            <div className="all-type-buttons">
                {types.map((pokemonType, idx) => 
                    <button 
                      key={idx} 
                      onClick={() => onClick(pokemonType.type)}
                      className="type-button"
                    >
                        <img src={pokemonType.icon} alt="" />
                        {pokemonType.type ? pokemonType.type : 'All Types'}
                    </button>
                )}
            </div>
        </div>
    );
}
