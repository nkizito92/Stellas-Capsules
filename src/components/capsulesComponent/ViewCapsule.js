import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {capsules} from './listOfCapusles'

const ViewCapsule = () => {
    const param = useParams()
    const capsule = capsules.mini_pills.find(cap => cap.id === Number(param.id))
    return (
        <>
            Here you will view the Selected Capsule!!!
            <h1>{capsule.name}</h1>
            <div>{capsule.image}</div>
            <div>{capsule.size}</div>
            <div>
                <Link to="/capsules">Back</Link>
            </div>
        </>
    )

}

export default ViewCapsule