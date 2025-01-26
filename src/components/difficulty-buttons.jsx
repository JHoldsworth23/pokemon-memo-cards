/* eslint-disable react/prop-types */
export default function DifficultyButtons({ onClick }) {
    return (
        <div>
            <button onClick={() => onClick('easy')}>Easy</button>
            <button onClick={() => onClick('normal')}>Normal</button>
            <button onClick={() => onClick('hard')}>Hard</button>
        </div>
    );
}