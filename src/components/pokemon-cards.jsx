export default function PokemonCards({ cards, callback }) {
    return (
        cards.map(card => 
            <div key={card.id} onClick={() => callback(card.id)}>
                <img src={card.images.small} alt={card.name} />
            </div>
        )
    );
}