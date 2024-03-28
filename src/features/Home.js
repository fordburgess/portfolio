import React, { useEffect } from 'react'
import experience from "../json/Experience.json"
import './styles/Home.css'

const Home = () => {

  useEffect(() => {     
        
    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle');
    const description = document.getElementById('description-and-nav');

    const professional = document.getElementById('professional-marker');
    const freelance = document.getElementById('freelance-marker');

    const resize = () => {
        const scrollPos = window.scrollY;

        title.style.fontSize = `clamp(3rem, ${6 - (scrollPos * 0.015)}rem, 6rem)`;
        subtitle.style.fontSize = `clamp(1.25rem, ${2.5 - (scrollPos * 0.007)}rem, 2.5rem)`;    

        var leftValTitle = 29 - (scrollPos * 0.115) > 0 ? 29 - (scrollPos * 0.115) : 0;
        var leftValSubtitle = 36.5 - (scrollPos * 0.125) > 0 ? 36.5 - (scrollPos * 0.125) : 0;        

        title.style.left = `${leftValTitle}%`;        
        subtitle.style.left = `${leftValSubtitle}%`;        

        title.style.top = `clamp(7%, ${35 - scrollPos * 0.105}%, 35%)`;
        subtitle.style.top = `clamp(16%, ${52 - scrollPos * 0.125}%, 52%)`;


        var step = -200 + scrollPos;
        var opacityVal = step / 500;

        description.style.opacity = `clamp(0, ${opacityVal}, 1)`;         

        if (scrollPos >= 500 && scrollPos <= 900) {
            professional.classList.add('active-marker')
            freelance.classList.remove('active-marker')
        }

        if (scrollPos >= 900) {
            freelance.classList.add('active-marker');
            professional.classList.remove('active-marker')
        }
    }

    resize();

    window.addEventListener('scroll', resize)

    return () => {
        window.removeEventListener('scroll', resize)
    }
  }, [])


  return (
    <div style={{ boxSizing: 'border-box' }}>
        <div className='w-full h-screen py-4 px-6 sticky top-0'>
            <div className='w-full h-full relative'>
                <h1 className='header' id="home-title" style={{ fontSize: '6rem'}}>Ford Burgess</h1>
                <h3 className='subtitle' id="home-subtitle" style={{ fontSize: '2rem'}}>Full Stack Developer</h3> 
                <div id="description-and-nav">
                    <p className='description mb-8' id="home-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.</p> 
                    <ul>
                        <li className="marker" id="professional-marker">
                            <h4 className=''>Professional</h4>
                        </li>
                        <li className="marker" id="freelance-marker">
                            <h4 className=''>Freelance</h4>
                        </li>
                    </ul>
                </div>
            </div>   
        </div>
        <div className='w-full h-full flex justify-end text-left relative'>
            <div className='w-1/2 flex flex-col items-start pt-32'>
                {
                    experience.experience.professional.map((item, index) => {
                        return (
                            <div key={index} className='w-3/4 flex flex-col justify-start items-start mb-16' id="experience-section">
                                <h3 className='subtitle font-black'><strong>{item.name}</strong></h3>
                                <p className='description text-xl mb-3'>{item.dates}</p>
                                <p className='description text-sm mb-3'>{item.description}</p>
                                <div  className='w-full flex flex-wrap'>
                                    {
                                        item.stack.map((tech, i) => {
                                            return (
                                                <div key={i} className='px-2 bg-white bg-opacity-70 rounded-xl m-0.5'>
                                                    <p className='description m-0 text-xs text-black'>{tech}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {/* <h3 className='subtitle text-5xl pl-4'>Professional</h3> */}               
                {/* <h3 className='subtitle text-5xl pl-4'>Freelance and Personal</h3> */}
                {
                    experience.experience.freelance.map((item, index) => {
                        return (
                            <div className='w-3/4 flex flex-col justify-start items-start mb-16' id="experience-section">
                                <h3 className='subtitle font-black'><strong>{item.name}</strong></h3>
                                <p className='description text-xl mb-4'>{item.dates}</p>
                                <p className='description text-sm'>{item.description}</p>
                            </div>
                        )
                    })
                }                
            </div>
        </div>      
    </div>
  )
}

export default Home
