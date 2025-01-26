import shuffleAndSlice from "../script/shuffle-and-slice";

export default function PokemonCards({ cards, difficulty, check, setState }) {
    return (
        cards.map(card => 
            <div 
              key={card.id} 
              onClick={() => {
                check(card.id);
                setState(shuffleAndSlice(cards, difficulty))
              }}
            >
                <img src={card.images.small} alt={card.name} />
            </div>
        )
    );
}