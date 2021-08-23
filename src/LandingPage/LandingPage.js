import React from 'react'
import './LandingPage.css'

function Hello()
{
    return(
        <div className="Hello">
            <div className="Title">
                Hi, <br/>I am Alek.  
            </div>
            <div className="Sub-intro">
                Freelancer / Web Dev / Programmer
            </div>
        </div>
    )
}

//** Make the lets talk at the end highlight on hover to a contact me pop or something **//

function LandingPage()
{
    return(
        <div className="App-body">
            <Hello/>
            <div className="Text">
                I am a developer based in the US. <br/>
                I love to write code and work on projects. <br/>
                Lets talk.
            </div>
        </div>
    )
}

export default LandingPage;