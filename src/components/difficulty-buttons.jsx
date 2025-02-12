/* eslint-disable react/prop-types */
import "../style/difficulty-buttons.css";

export default function DifficultyButtons({ cards, onClick, pokemonType }) {
    return (
        <div className="difficulty-container">
            <p>Select a difficulty level</p>
            <div className="difficulty-buttons">
                <button onClick={() => onClick('easy', cards.slice(0, 10), "start")}>
                    Easy
                </button>
                <button onClick={() => onClick('normal', cards.slice(0, 18), "start")}>
                    Normal
                </button>
                <button onClick={() => onClick('hard', cards, "start")}>
                    Hard
                </button>
            </div>
            <p>Selected Pokémon type:</p>
            <div className="selected-type-container">
                <img src={pokemonType.icon} alt="" />
                <p>{pokemonType.type ? pokemonType.type : 'All Types'}</p>
                <img src={pokemonType.icon} alt="" />
            </div>
        </div>
    );
}