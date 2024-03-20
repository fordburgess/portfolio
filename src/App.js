import React, { useEffect, useState } from 'react'
import Home from './features/Home';
import Loading from './components/Loading';
import './App.css';

function App() {  

  return (
    <div className="App">
      <Loading />    
      <Home />      
    </div>
  );
}

export default App;
