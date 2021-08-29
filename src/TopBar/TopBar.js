import React from 'react'
import HomeButton from './HomeButton/HomeButton'
import './TopBar.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { IconContext } from 'react-icons'

function NavButtons()
{
    function clicked()
    {
        console.log("button was clicked")
    }

    return(
        <div className="navbuttons">
            <button onClick={clicked}>
                About/
            </button>
            <button onClick={clicked}>
                Work/
            </button>
            <button onClick={clicked}>
                Contact/
            </button>
        </div>
    )
}

function TopBar()
{
    return(
        <div className="TopBar">
            <HomeButton/>

            <IconContext.Provider value={{ className: "MenuIcon" }}>
                <AiOutlineMenu/>
            </IconContext.Provider>
        </div>
    )
}

export default TopBar;