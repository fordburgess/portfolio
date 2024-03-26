import React from 'react'
import LinkedIn from '../assets/linkedin.png'
import GitHub from '../assets/github.png'
import Instagram from '../assets/instagram.png'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 flex py-4 px-6'>
      <div className='flex'>
        <a href="test"><img src={LinkedIn} alt="linkedin-icons8" className='logo'/></a>
        <a href="test"><img src={GitHub} alt="github-icons8" className='logo'/></a>
        <a href="test"><img src={Instagram} alt="instagram-icons8" className='logo'/></a>
      </div>
    </div>
  )
}

export default Navbar
