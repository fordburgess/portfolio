import React, { useEffect } from 'react'
import './styles/Home.css'

const Home = () => {    

  useEffect(() => {
    console.log(window.scrollY)
    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle')

    const resize = () => {
        const scrollPos = window.scrollY;

        title.style.fontSize = `clamp(2.5rem, ${6 - (scrollPos * 0.05)}rem, 6rem)`;
        subtitle.style.fontSize = `clamp(1rem, ${2 - (scrollPos * 0.045)}rem, 2rem)`;    

        var leftValTitle = 30 - (scrollPos * 0.35) > 0 ? 30 - (scrollPos * 0.35) : 0;
        var leftValSubtitle = 40 - (scrollPos * 0.35) > 0 ? 40 - (scrollPos * 0.35) : 0;        

        title.style.left = `${leftValTitle}%`;        
        subtitle.style.left = `${leftValSubtitle}%`;        

        title.style.top = `clamp(7%, ${30 - scrollPos * 0.35}%, 35%)`;
        subtitle.style.top = `clamp(15%, ${53 - scrollPos * 0.35}%, 53%)`;
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
            <div className='w-full h-full relative flex flex-col'>
                <h1 className='header' id="home-title" style={{ fontSize: '6rem'}}>Ford Burgess</h1>
                <h3 className='subtitle' id="home-subtitle" style={{ fontSize: '2rem'}}>Full Stack Developer</h3>                           
            </div>         
        </div>
    </div>
  )
}

export default Home
