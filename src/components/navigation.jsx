/* eslint-disable react/prop-types */
import DifficultyButtons from "./difficulty-buttons";
import PokemonTypeButtons from "./pokemon-types-buttons";

// POKEMON ICONS
import allTypes from "../assets/all-type.png";
import fireType from "../assets/fire-type.png";
import waterType from "../assets/water-type.png";
import grassType from "../assets/grass-type.png";
import lightningType from "../assets/lightning-type.png";
import dragonType from "../assets/dragon-type.png";
import fightingType from "../assets/fighting-type.png";
import darknessType from "../assets/darkness-type.png";
import metalType from "../assets/metal-type.png";
import psychicType from "../assets/psychic-type.png";

export default function Navigation({ pokemon, startGame, setType }) {
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

    return (
        <>
            <DifficultyButtons cards={pokemon} onClick={startGame}/>
            <PokemonTypeButtons onClick={setType} types={POKEMONTYPES}/>
        </>
    )
}