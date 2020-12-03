import React from 'react'
import Logo from '../Logo'
import Links from '../Links'

const NavBar = () => (
    <div className='container'>
        <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <Logo />
            <Links />
        </div>
    </div>
)

export default NavBar;