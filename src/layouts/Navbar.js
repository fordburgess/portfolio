import React, { useState } from 'react'
import LinkedIn from '../assets/linkedin.svg'
import GitHub from '../assets/github.png'
import Instagram from '../assets/instagram.png'
import InstagramColor from '../assets/instagram-w-color.png'
import "./styles/Navbar.css"

const Navbar = () => {
  const [igSource, setIgSource] = useState(Instagram);

  return (
    <div className='fixed w-full top-0 flex py-4 px-6 z-50'>
      <div className='flex' id="link-container">
        <a target="_blank" href="https://linkedin.com/in/ford-burgess"><img src={LinkedIn} alt="linkedin-icons8" className='logo' id="linkedin"/></a>                
        <a target="_blank" href="https://github.com/fordburgess"><img src={GitHub} alt="github-icons8" className='logo' id="github"/></a>
        <a target="_blank" href="https://www.instagram.com/ford_burgess/"><img src={igSource} alt="instagram-icons8" className='logo' id="instagram"/></a>
      </div>
    </div>
  )
}

export default Navbar
