import React from 'react'
import {capsules} from './listOfCapusles'
import ListedCapsules from './ListedCapsules'
const Capsules = () => {
    //Displays a list of Capsules and other products
    const showList = capsules.mini_pills.map(cap => {
        return (
           <ListedCapsules  key={`mini_${cap.id}`} id={cap.id} name={cap.name} image={cap.image} size={cap.size}/>
        )
    })
    return (
        <>
            Choose one out of the list of bitter leaf capsules 
            {showList}
        </>
    )
}

export default Capsules