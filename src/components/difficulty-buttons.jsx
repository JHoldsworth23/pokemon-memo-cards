/* eslint-disable react/prop-types */
export default function DifficultyButtons({ onClick, isGameOver }) {
    return (
        <div>
            <button 
              onClick={() => {
                onClick('easy');
                isGameOver(false);
            }}>
                Easy
            </button>
            <button 
              onClick={() => {
                onClick('normal');
                isGameOver(false);
            }}>
                Normal
            </button>
            <button 
              onClick={() => {
                onClick('hard');
                isGameOver(false);
            }}>
                Hard
            </button>
        </div>
    );
}