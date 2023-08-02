import React from 'react'
import './Header.css'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import Landing from '../Landing/Landing'

export default function Header() {
    return (
        <div className='header'>
            <TopBar />
            <NavBar />
            <Landing />
        </div>
    )
}
