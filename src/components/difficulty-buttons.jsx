/* eslint-disable react/prop-types */
export default function DifficultyButtons({ cards, onClick, setPokemon, changeGameMode }) {
    return (
        <div>
            <button onClick={() => {
                onClick('easy');
                setPokemon(cards.slice(0, 10));
                changeGameMode("start");
            }}>
                Easy
            </button>
            <button onClick={() => {
                onClick('normal');
                setPokemon(cards.slice(0, 18));
                changeGameMode("start");
            }}>
                Normal
            </button>
            <button onClick={() => {
                onClick('hard');
                setPokemon(cards);
                changeGameMode("start");
            }}>
                Hard
            </button>
        </div>
    );
}