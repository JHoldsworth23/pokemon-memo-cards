/* eslint-disable react/prop-types */
export default function Modal({ resetGame, newGame }) {
    return (
        // this is a dialog modal to navigate the setting
        <div>
            {/* image of pokemon ball */}
            <p>GAME OVER</p>
            <div>
                <button onClick={() => resetGame()}>RESET</button>
                <button onClick={() => newGame()}>NEW GAME</button>
            </div>
        </div>
    )
}