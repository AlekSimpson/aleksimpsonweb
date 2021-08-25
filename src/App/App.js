import React from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import TopBar from '../TopBar/TopBar'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'
import Skills from '../Skills/Skills'

function App() 
{
  return (
    <div className="App">
      <TopBar/>
      <section className="LandingPage">
        <LandingPage/>
      </section>

      <section className="About">
        <About/>
      </section>

      <section className="Work">
        <Work/>
      </section>

      <section className="Skills-Process">
        <Skills/>
      </section>

      <section className="Contact">
        <Contact/>
      </section>
    </div>
  );
}

export default App;