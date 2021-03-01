import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to='/' className="n-brand">Shoppy</NavLink></li>                
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/categories' className="cat-dropdown">Categories</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
            <ol>
                <li><NavLink to='/signup'>Signup</NavLink></li>
                <li><NavLink to='/signin'>Signin</NavLink></li>
            </ol>
        </nav>
    )
}
