import React from 'react'
import './Header.css'
import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <div className='header'>
            <TopBar />
            <NavBar />
        </div>
    )
}
