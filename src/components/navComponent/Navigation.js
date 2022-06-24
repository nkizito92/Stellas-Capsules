import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    const active = (isActive) => {
        return {
            backgroundColor: isActive ? "#093d00" : "",
            color: isActive ? "white" : ""
        }
    }
    return (
        <div className='navBar'>
           <NavLink to="/" style={({ isActive }) => active(isActive)}>Home</NavLink>
           <NavLink to="/capsules" style={({ isActive }) => active(isActive)}>Capsules</NavLink>
        </div>
        )
    }

export default Navigation