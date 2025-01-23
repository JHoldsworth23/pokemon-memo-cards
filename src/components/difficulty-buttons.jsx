/* eslint-disable react/prop-types */
export default function DifficultyButtons({ callback }) {
    return (
        <div>
            <button onClick={() => callback('easy')}>Easy</button>
            <button onClick={() => callback('normal')}>Normal</button>
            <button onClick={() => callback('hard')}>Hard</button>
        </div>
    );
}