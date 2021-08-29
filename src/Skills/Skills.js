import React from 'react'
import './Skills.css'

function MainText()
{
    return(
        <div className="MainText">
            <div className="TextTitle">
                Skills & <br/>Experience
            </div>
            <div className="TextBody">
                I began my front end journey originally with native iOS development about 7 years ago. 
                Since then I have branched out from just iOS development to learning React and React Native. 
                I have gained a massive passion for computer science in general and have passed AP Computer Science A and Principles. 
            </div>
            <div className="TextBody">
                I build applications that are responsive and efficient. 
                My main area of expertise is in Front End Development, React/React Native, CSS, HTML and JS.    
            </div>
            <div className="TextBody">
                I also have a lot of experience on the native side of iOS, Swift, Xcode and SwiftUI. 
            </div>
            <div className="TextBody">
                If you have questions, feel free to contact me.
            </div>
        </div>
    )
}

function Percent({ title, percent })
{
    return(
        <div className="PercentContainer">
            <div className="PercentTitle">
                {title}
            </div>
            <div className="Percent" style={{ width: percent }}/>
        </div>
    )
}

function TechPercents()
{
    return(
        <div className="Percents">
            <Percent title="ReactJS" percent="90%"/>
            <Percent title="HTML" percent="80%"/>
            <Percent title="CSS" percent="65%"/>
            <Percent title="Swift" percent="95%"/>
            <Percent title="Backend" percent="65%"/>
        </div>
    )
}

function Skills()
{
    return(
        <div className="SkillsContainer">
            <MainText/>
            <TechPercents/>
        </div>
    )
}

export default Skills;