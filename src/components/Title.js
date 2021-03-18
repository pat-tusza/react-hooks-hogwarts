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

const Title = ({theHog}) => {
    const [info, setInfo] = useState(false)
    
    function handlePigClick(e){
        setInfo(!info)
    }

    const handleDelete = () =>{
        theHog.deleteCallback.callbackNameToDelete(theHog.theHog.hog.name)
    }

    function pigPic(){
        switch(theHog.theHog.hog.name){
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
            <p>{theHog.theHog.hog.name}</p>
            <button onClick={handleDelete}>Delete this Pig</button><br></br>
            <img src= {pigPic()} alt ={theHog.theHog.hog.name} onClick ={handlePigClick}/>
            {info? <Greased theHog= {theHog.theHog.hog} /> : null} 
        </div>
    )
}

export default Title;

