import React from 'react'
import LinkedIn from '../assets/linkedin.png'
import GitHub from '../assets/github.png'

const Navbar = () => {
  return (
    <div className='absolute top-0 flex py-4 px-6'>
      <div>

      </div>
      <a href="test"><img src={LinkedIn} alt="linkedin" className='logo'/></a>
      <a href="test"><img src={GitHub} alt="github" className='logo'/></a>
    </div>
  )
}

export default Navbar
