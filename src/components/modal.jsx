/* eslint-disable react/prop-types */
import PokeBalls from "../assets/image/pokeballs.png";
import "../style/modal.css";

export default function Modal({ currentScore, maxScore, resetGame, newGame, gameMode }) {
    return (
        <div className="modal-container">
            <div className="modal">
                <img src={PokeBalls} alt="" />
                {gameMode.gameOver ? (
                    <>
                        <p className="modal-heading">GAME OVER</p>
                        <p className="quote">
                            &ldquo;You can&apos;t expect to win every single battle, but love&apos;s worth 
                            fighting for, and if you&apos;re brave and courageous and never quit, you can 
                            come out a winner, just like me.&rdquo; <span>- Brock -</span>
                        </p>
                    </>
                  ) : (
                    <>
                        <p className="modal-heading">YOU ARE THE POKÉMON MASTER!</p>
                        <p id="mewtwo" className="quote">
                            &ldquo;I see now that the circumstances of one&apos;s birth are irrelevant. 
                            It is what you do with the gift of life that determines who you are.&rdquo; 
                            <span>- Mewtwo -</span>
                        </p>
                    </>
                  )
                }
                <p className="final-score">Score:</p>
                <p>{currentScore} / {maxScore}</p>
                <div className="modal-buttons">
                    <button onClick={() => resetGame()}>RESET</button>
                    <button onClick={() => newGame()}>NEW GAME</button>
                </div>
            </div>
        </div>
    )
}