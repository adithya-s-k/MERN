import React from 'react'
import Logo from '../Assets/logo.png'

function Header(props){
    const logo = <img src={ Logo } style={{ width:"40px" }} alt="logo"></img>
    return (
        <div className='header'>
        {logo}
        <h1>Notes</h1>
        </div>
    )
}

export default Header;