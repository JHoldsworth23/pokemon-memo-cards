/* eslint-disable react/prop-types */
export default function DifficultyButtons({ cards, onClick, setPokemon }) {
    return (
        <div>
            <button onClick={() => {
                onClick('easy');
                setPokemon(cards.slice(0, 10));
            }}>
                Easy
            </button>
            <button onClick={() => {
                onClick('normal');
                setPokemon(cards.slice(0, 18));
            }}>
                Normal
            </button>
            <button onClick={() => {
                onClick('hard');
                setPokemon(cards);
            }}>
                Hard
            </button>
        </div>
    );
}