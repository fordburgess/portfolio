import React from 'react'
import LinkedIn from '../assets/linkedin.png'
import GitHub from '../assets/github.png'

const Navbar = () => {
  return (
    <div className='fixed w-full top-0 flex py-4 px-6'>
      <div className='flex'>
        <a href="test"><img src={LinkedIn} alt="linkedin" className='logo'/></a>
        <a href="test"><img src={GitHub} alt="github" className='logo'/></a>
      </div>
    </div>
  )
}

export default Navbar
