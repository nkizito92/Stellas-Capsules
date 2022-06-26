import React from "react"
import { Link } from "react-router-dom"
const ListedCapsules = ({id, name, size, image}) => {
    return (
        <>
           <div>
            <Link to={`/capsules/${id}`}>{name}</Link>
            <div>{size}</div>
           </div>
           
        </>
    )
}

export default ListedCapsules