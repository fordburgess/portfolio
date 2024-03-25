import React, { useRef, useEffect } from 'react'
import Home from './features/Home';
import './App.css';
import { Gradient } from './components/Gradient.js'
import Layout from './layouts/index.js'

function App() {  

  // useEffect(() => {
  //   const gradient = new Gradient();
  //   gradient.initGradient('#gradient-canvas');
  // }, [])

  return (
    <div className="App">    
      {/* <canvas id="gradient-canvas" data-transition-in /> */}
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
