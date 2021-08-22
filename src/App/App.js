import React from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import TopBar from '../TopBar/TopBar'
import reactDom from 'react-dom';

function App() 
{
  return (
    <div className="App">
      <TopBar/>
      <section className="one">
        <LandingPage/>
      </section>
      <section className="two">
        <p>
          second page 
        </p>
      </section>
      <section className="three">
        <p>
          third page 
        </p>
      </section>
      <section className="four">
        <p>
          fourth page 
        </p>
      </section>
      <section className="five">
        <p>
          fifth page
        </p>
      </section>
    </div>
  );
}

export default App;


//<TopBar/>
//<LandingPage/> 