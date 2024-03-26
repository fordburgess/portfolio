import React, { useEffect } from 'react'
import './styles/Home.css'

const Home = () => {    

  useEffect(() => {
    console.log(window.scrollY)
    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle');
    const description = document.getElementById('home-description');

    const resize = () => {
        const scrollPos = window.scrollY;

        title.style.fontSize = `clamp(3rem, ${6 - (scrollPos * 0.05)}rem, 6rem)`;
        subtitle.style.fontSize = `clamp(1.25rem, ${2.5 - (scrollPos * 0.0275)}rem, 2.5rem)`;    

        var leftValTitle = 29 - (scrollPos * 0.39) > 0 ? 29 - (scrollPos * 0.39) : 0;
        var leftValSubtitle = 36.5 - (scrollPos * 0.525) > 0 ? 36.5 - (scrollPos * 0.525) : 0;        

        title.style.left = `${leftValTitle}%`;        
        subtitle.style.left = `${leftValSubtitle}%`;        

        title.style.top = `clamp(7%, ${35 - scrollPos * 0.35}%, 35%)`;
        subtitle.style.top = `clamp(17%, ${52 - scrollPos * 0.475}%, 52%)`;


        var step = -200 + scrollPos;
        var opacityVal = step / 200;

        description.style.opacity = `clamp(0, ${opacityVal}, 1)`;       

    }

    resize();

    window.addEventListener('scroll', resize)

    return () => {
        window.removeEventListener('scroll', resize)
    }
  }, [])


  return (
    <div style={{ height: '200vh', boxSizing: 'border-box' }}>
        <div className='w-full h-screen py-4 px-6 fixed'>
            <div className='w-full h-full relative'>
                <h1 className='header' id="home-title" style={{ fontSize: '6rem'}}>Ford Burgess</h1>
                <h3 className='subtitle' id="home-subtitle" style={{ fontSize: '2rem'}}>Full Stack Developer</h3> 
                <p className='description' id="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
            </div>         
        </div>
    </div>
  )
}

export default Home
