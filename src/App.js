import React, { useRef, useEffect } from 'react'
import Home from './features/Home';
import './App.css';
import { Gradient } from './components/Gradient.js'

function App() {  

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, [])

  return (
    <div className="App">    
      <canvas id="gradient-canvas" data-transition-in />
      <Home />      
    </div>
  );
}

export default App;
