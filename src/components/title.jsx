import PokeBall from '../assets/pokeball-logo.png';

export default function Title() {
    return (
        <>
            <img src={PokeBall} alt="pokeball logo" />
            <h1>Pokémon Memory Game</h1>
        </>
    )
}