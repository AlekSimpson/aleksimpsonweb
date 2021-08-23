import React from 'react'
import HomeButton from './HomeButton/HomeButton'
import './TopBar.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { IconContext } from 'react-icons'

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