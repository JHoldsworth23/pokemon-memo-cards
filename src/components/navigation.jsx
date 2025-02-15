/* eslint-disable react/prop-types */
import DifficultyButtons from "./difficulty-buttons";
import PokemonTypeButtons from "./pokemon-types-buttons";
import "../style/navigation.css";

// POKEMON ICONS
import allTypes from "../assets/image/all-type.png";
import fireType from "../assets/image/fire-type.png";
import waterType from "../assets/image/water-type.png";
import grassType from "../assets/image/grass-type.png";
import lightningType from "../assets/image/lightning-type.png";
import dragonType from "../assets/image/dragon-type.png";
import fightingType from "../assets/image/fighting-type.png";
import darknessType from "../assets/image/darkness-type.png";
import metalType from "../assets/image/metal-type.png";
import psychicType from "../assets/image/psychic-type.png";

export default function Navigation({ pokemon, startGame, setType, pokemonType }) {
    const POKEMONTYPES = [
        { type: '', icon: allTypes }, 
        { type: 'Fire', icon: fireType }, 
        { type: 'Water', icon: waterType }, 
        { type: 'Grass', icon: grassType }, 
        { type: 'Lightning', icon: lightningType }, 
        { type: 'Dragon', icon: dragonType }, 
        { type: 'Fighting', icon: fightingType }, 
        { type: 'Darkness', icon: darknessType }, 
        { type: 'Metal', icon: metalType }, 
        { type: 'Psychic', icon: psychicType },
      ];

    const selectedType = POKEMONTYPES.filter(obj => obj.type == pokemonType);
    
    return (
        <>
            <DifficultyButtons cards={pokemon} onClick={startGame} pokemonType={selectedType[0]} />
            <PokemonTypeButtons onClick={setType} types={POKEMONTYPES}/>
        </>
    )
}