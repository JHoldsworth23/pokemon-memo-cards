/* eslint-disable react/prop-types */
export default function GameInterfaceButtons({ newGame, isOpen, openQuery }) {
    return (
        <div className="buttons-container">
            <button onClick={() => newGame()}>
              NEW GAME
            </button>
            <button 
              className={`query${isOpen ? " open" : ""}`}
              title="How to play?"
              onClick={() => openQuery()}
            >
              {isOpen ? "Don't click on the same card twice!\nClick this to close" : "?"}
            </button>
          </div>
    )
}