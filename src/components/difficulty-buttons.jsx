/* eslint-disable react/prop-types */
export default function DifficultyButtons({ cards, onClick, setPokemon, setGameMode }) {
    return (
        <div>
            <button onClick={() => {
                onClick('easy');
                setPokemon(cards.slice(0, 10));
                setGameMode("start");
            }}>
                Easy
            </button>
            <button onClick={() => {
                onClick('normal');
                setPokemon(cards.slice(0, 18));
                setGameMode("start");
            }}>
                Normal
            </button>
            <button onClick={() => {
                onClick('hard');
                setPokemon(cards);
                setGameMode("start");
            }}>
                Hard
            </button>
        </div>
    );
}