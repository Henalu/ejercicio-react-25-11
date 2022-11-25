import React from 'react'
import logo from './../logo.svg';

const Header = ({ principal, subtitulo, tercero }) => {
    return (
        <header>
            <div id='principal'>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>{principal}</h1>
            </div>

            <hgroup id='secundario'>
                <h2>{subtitulo}</h2>
                <h3>{tercero}</h3>
            </hgroup>
        </header>
    )
}

export default Header
