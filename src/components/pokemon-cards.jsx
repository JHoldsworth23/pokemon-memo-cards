import '../style/pokemon-cards.css';
import BackCard from '../assets/pokemon-back-card.png';

export default function PokemonCards({ cards, onClick, isFlipped }) {
  return (
    cards.map(card => 
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
    )
  );
}