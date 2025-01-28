export default function PokemonCards({ cards, onClick }) {
  return (
    cards.map(card => 
        <div 
          key={card.id} 
          onClick={() => {
            onClick(card.id, cards);
          }}
        >
            <img src={card.images.small} alt={card.name} />
        </div>
    )
  );
}