import React from 'react'
import './App.css';
import LandingPage from '../LandingPage/LandingPage'
import TopBar from '../TopBar/TopBar'

function App() 
{
  return (
    <div className="App">
      <TopBar/>
      <LandingPage/> 
    </div>
  );
}

export default App;
