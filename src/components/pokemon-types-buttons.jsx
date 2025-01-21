/* eslint-disable react/prop-types */
// props - setState function, array of text
export default function PokemonTypeButtons({ callback, types }) {
    return (
        <>
            {types.map((pokemonType, idx) => 
                <button key={idx} onClick={() => callback(pokemonType)}>
                    {pokemonType ? pokemonType : 'All Types'}
                </button>
            )}
        </>
    );
}
