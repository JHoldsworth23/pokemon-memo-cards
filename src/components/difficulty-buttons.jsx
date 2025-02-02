/* eslint-disable react/prop-types */
export default function DifficultyButtons({ cards, onClick }) {
    return (
        <div>
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
    );
}