/* eslint-disable react/prop-types */
export default function Scoreboard({ currentScore, maxScore }) {
    const bestScore = localStorage.getItem('score');

    return (
        <>
            <p>Score: {currentScore} / {maxScore} </p>
            <p>Best Score: {bestScore === null ? 0 : bestScore}</p>
        </>
    )
}