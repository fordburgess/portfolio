import React, { useEffect } from 'react'
import './styles/Home.css'

const Home = () => {    

  useEffect(() => {
    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle')

    const resize = () => {
        const scrollPos = window.scrollY;

        title.style.fontSize = `clamp(2.5rem, ${6 - (scrollPos * 0.05)}rem, 6rem)`;
        subtitle.style.fontSize = `clamp(1rem, ${2 - (scrollPos * 0.045)}rem, 2rem)`;    

        var leftValTitle = 30 - (scrollPos * 0.5) > 0 ? 30 - (scrollPos * 0.5) : 0;
        var leftValSubtitle = 40 - (scrollPos * 0.5) > 0 ? 40 - (scrollPos * 0.5) : 0;

        title.style.left = `${leftValTitle}%`;        
        subtitle.style.left = `${leftValSubtitle}%`;       
    }

    window.addEventListener('scroll', resize)

    return () => {
        window.removeEventListener('scroll', resize)
    }
  }, [])


  return (
    <div style={{ height: '200vh', boxSizing: 'border-box' }}>
        <div className='w-full h-screen py-4 px-6'>
            <div className='w-full h-full relative flex flex-col'>                
                <h1 className='header' id="home-title" style={{ fontSize: '6rem'}}>Ford Burgess</h1>
                <h3 className='subtitle' id="home-subtitle" style={{ fontSize: '2rem'}}>Full Stack Developer</h3>                           
            </div>         
        </div>
    </div>
  )
}

export default Home
