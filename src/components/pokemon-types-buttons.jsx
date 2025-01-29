/* eslint-disable react/prop-types */
export default function PokemonTypeButtons({ onClick, types }) {
    return (
        <>
            {types.map((pokemonType, idx) => 
                <button key={idx} onClick={() => onClick(pokemonType.type)}>
                    <img src={pokemonType.icon} alt="" />
                    {pokemonType.type ? pokemonType.type : 'All Types'}
                </button>
            )}
        </>
    );
}
