import React, { useEffect } from 'react'
import Navbar from './Navbar.js'
import { Gradient } from '../components/Gradient.js'
import './styles/index.css'

const Layout = ({ children }) => {

    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient('#gradient-canvas');
    }, [])

  return (
    <>
        <canvas id="gradient-canvas" data-transition-in />
        <Navbar />
        {children}
    </>
  )
}

export default Layout
