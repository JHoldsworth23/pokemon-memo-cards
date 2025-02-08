/* eslint-disable react/prop-types */
import PokeBall from "../assets/pokeball-logo.png";
import "../style/modal.css";

export default function Modal({ resetGame, newGame, gameMode }) {
    return (
        <div className="modal-container">
            <div className="modal">
                <img src={PokeBall} alt="" />
                {gameMode.gameOver ? (
                    <>
                        <p>GAME OVER</p>
                        <p>
                            &ldquo;You can&apos;t expect to win every single battle, but love&apos;s worth 
                            fighting for, and if you&apos;re brave and courageous and never quit, you can 
                            come out a winner, just like me.&rdquo; <span>- Brock</span>
                        </p>
                    </>
                  ) : (
                    <>
                        <p>You are the Pokemon Master!</p>
                        <p>
                            &ldquo;I see now that the circumstances of one&apos;s birth are irrelevant. 
                            It is what you do with the gift of life that determines who you are.&rdquo; 
                            <span>- Mewtwo</span></p>
                    </>
                  )
                }
                <div>
                    <button onClick={() => resetGame()}>RESET</button>
                    <button onClick={() => newGame()}>NEW GAME</button>
                </div>
            </div>
        </div>
    )
}