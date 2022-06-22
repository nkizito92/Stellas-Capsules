import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const active = (isActive) => {
        return {
            backgroundColor: isActive ? "white" : "",
            color: isActive ? "black" : ""
        }
    }
    return (
        <NavLink to="/">Home</NavLink>
        )
    }

export default Navigation