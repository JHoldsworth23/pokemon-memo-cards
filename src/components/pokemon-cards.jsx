/* eslint-disable react/prop-types */
import '../style/pokemon-cards.css';
import BackCard from '../assets/image/pokemon-back-card.png';

export default function PokemonCards({ cards, difficulty, onClick, isFlipped }) {
  return (
    <div className={'all-pokemon-cards ' + difficulty}>
      {cards.map(card =>
        <div
          key={card.id}
          onClick={() => onClick(card.id, cards)}
          className={`pokemon-card ${isFlipped ? 'flipped' : ''}`}
        >
            <div className="front-card">
              <img src={card.images.small} alt={card.name} />
            </div>
            <div className="back-card" disabled={isFlipped}>
              <img src={BackCard} alt="" />
            </div>
        </div>
      )}
    </div>
  );
}