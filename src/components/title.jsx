import PokemonTitle from '../assets/image/pokemon-logo.png';
import "../style/title.css";

export default function Title() {
    return (
        <>
            <img className="title" src={PokemonTitle} alt="pokemon" />
            <h1>Memory Game</h1>
        </>
    )
}