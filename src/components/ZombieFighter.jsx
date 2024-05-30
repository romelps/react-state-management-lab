//import { useState } from 'react'

const ZombieFighter = (props) => {
    const { zombieFighter, handleAddFighter, zombieFighters } = props
    
  

    return (
        
        <li>
            <img src={zombieFighter.img}/>
            <h3>Name: { zombieFighter.name }</h3>
            <h3>Price: { zombieFighter.price }</h3>
            <h3>Strength: { zombieFighter.strength }</h3>
            <h3>Agility: { zombieFighter.agility }</h3>
            <button type="submit" onClick={() => {handleAddFighter(zombieFighter)}} >Add</button>
        </li>
    
    );
};

export default ZombieFighter;