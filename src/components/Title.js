import React, {useState} from 'react'
import Greased from './Greased'
import babe from '../assets/babe.jpg'
import bailey from '../assets/bailey.jpg'
import cherub from '../assets/cherub.jpg'
import galaxyNote from '../assets/galaxy_note.jpg'
import leggoMyEggo from '../assets/leggo_my_eggo.jpg'
import peppa from '../assets/peppa.jpg'
import piggySmalls from '../assets/piggy_smalls.jpg'
import piglet from '../assets/piglet.jpg'
import porkchop from '../assets/porkchop.jpg'
import trouble from '../assets/trouble.jpg'
import truffleShuffle from '../assets/truffle_shuffle.jpg'
import augustus from '../assets/augustus_gloop.jpg'

// const hogPic = {
//     "Babe": {babe},
//     "Bailey": {bailey},
//     "Cherub": {cherub},
//     "Galaxy Note": {galaxyNote},
//     "Leggo My Eggo": {leggoMyEggo},
//     "Peppa": {peppa},
//     "Piggy Smalls": {piggySmalls},
//     "Porkchop": {porkchop},
//     "Trouble": {trouble},
//     "Truffle Shuffle": {truffleShuffle},
//     "Piglet": {piglet}
// }
const Title = ({hog}) => {
    const [info, setInfo] = useState(false)
    
    function handlePigClick(e){
        setInfo(!info)
        console.log(e.target, info)
    }

    function pigPic(){
        switch(hog.name){
            case "Augustus Gloop":
                return augustus
            case "Babe": 
                return babe;
            case "Bailey": 
                return bailey;
            case "Cherub":
                return cherub;
            case "Galaxy Note":
                return galaxyNote;
            case "Leggo My Eggo":
                return leggoMyEggo;
            case "Peppa":
                return peppa
            case "Piggy Smalls":
                return piggySmalls;
            case "Porkchop":
                return porkchop;
            case "Trouble":
                return trouble;
            case "Truffle Shuffle":
                return truffleShuffle;
            case "Piglet":
                return piglet
            default: 
            return "Butts"
        }

    }

    return (
        <div>
            <p>{hog.name}</p>
            <img src= {pigPic()} alt ={hog.name} onClick ={handlePigClick}/>
            {info? <Greased theHog= {hog} /> : null} 
        </div>
    )
}

export default Title;

