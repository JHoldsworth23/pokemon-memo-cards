/* eslint-disable react/prop-types */
// props - setState function, array of text
export default function PokemonTypeButtons({ onClick, types }) {
    return (
        <>
            {types.map((pokemonType, idx) => 
                <button key={idx} onClick={() => onClick(pokemonType)}>
                    {pokemonType ? pokemonType : 'All Types'}
                </button>
            )}
        </>
    );
}
