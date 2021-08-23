import React from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import TopBar from '../TopBar/TopBar'

function App() 
{
  return (
    <div className="App">
      <TopBar/>
      <section className="LandingPage">
        <LandingPage/>
      </section>

      <section className="Skills-Process">
        <p>
          second page 
        </p>
      </section>
      
      <section className="Contact">
        <p>
          third page 
        </p>
      </section>
    </div>
  );
}

export default App;