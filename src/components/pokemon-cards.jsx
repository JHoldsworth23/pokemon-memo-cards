export default function PokemonCards(prop) {
    return (
        prop.array.map(card => 
            <div key={card.id} onClick={null}>
                <img src={card.images.small} alt={card.name} />
            </div>
        )
    );
}