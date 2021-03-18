import React from 'react';


const Greased = ({theHog}) => {
    return (
        <div>
            <p> Specialty: {theHog.specialty} </p>
            <p> Weight: {theHog.weight}</p>
            <p> Greased? {String(theHog.greased)}</p>
            <p>Highest Medal Achieved: {theHog["highest medal achieved"]}</p>
        </div>
    )
}

export default Greased
