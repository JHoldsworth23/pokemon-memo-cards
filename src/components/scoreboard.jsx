/* eslint-disable react/prop-types */
import "../style/scoreboard.css";

export default function Scoreboard({ currentScore, maxScore }) {
    const bestScore = localStorage.getItem('score');

    return (
        <div className="scoreboard">
            <p>Score: <span>{currentScore} / {maxScore}</span></p>
            <p>Best Score: <span>{bestScore === null ? 0 : bestScore}</span></p>
        </div>
    )
}