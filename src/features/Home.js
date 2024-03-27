import React, { useEffect } from 'react'
import './styles/Home.css'

const Home = () => {    

  useEffect(() => {
    console.log(window.scrollY)
    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle');
    const description = document.getElementById('description-and-nav');

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


        var step = -500 + scrollPos;
        var opacityVal = step / 500;

        description.style.opacity = `clamp(0, ${opacityVal}, 1)`; 
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
                        <li>
                            <h4 className='text-2xl mb-2 font-museomoderno text-light-green'>Professional</h4>
                        </li>
                        <li>
                            <h4 className='text-2xl mb-2 font-museomoderno text-light-green'>Freelance</h4>
                        </li>
                    </ul>
                </div>
            </div>   
        </div>
        <div className='w-full h-full flex justify-end text-left relative'>
            <div className='w-1/2 flex flex-col items-start'>
                <h3 className='subtitle text-5xl pl-4'>Professional</h3>
                <div className='w-3/4 flex flex-col justify-start items-start p-4 mb-16' id="experience-section">
                    <h3 className='subtitle font-black'><strong>Abintus Consulting</strong></h3>
                    <p className='description text-xl mb-4'>May 2022 - Present</p>
                    <p className='description text-sm'>Abintus Consulting is a leading marketing consulting startup with clients all over the world, and I build and maintain the systems that help them achieve said status. Specifically, while at Abintus, I have built a website that offers automated versions of some of the services we provide, I have built a comprehensive internal use intranet site that organizes and displays pertinent data and analytics, organizes and helps manage current and potential relationships with clients... tbc</p>
                </div>
                <div className='w-3/4 flex flex-col justify-start items-start p-4 mb-20' id="experience-section">
                    <h3 className='subtitle font-black'><strong>Flugelhorn Web Agency</strong></h3>
                    <p className='description text-xl mb-4'>April 2021 - April 2022</p>
                    <p className='description text-sm'>We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America</p>
                </div>
                <h3 className='subtitle text-5xl pl-4'>Freelance and Personal</h3>
                <div className='w-3/4 flex flex-col justify-start items-start p-4 mb-16' id="experience-section">
                    <h3 className='subtitle font-black'><strong>Corcordium</strong></h3>
                    {/* <p className='description text-xl mb-4'>May 2022 - Present</p> */}
                    <p className='description text-sm'>Fashion fashion fashion fashion fashion fashion fashion fashion fashion </p>
                </div>
                <div className='w-3/4 flex flex-col justify-start items-start p-4 mb-20' id="experience-section">
                    <h3 className='subtitle font-black'><strong>Millie Penner</strong></h3>
                    <p className='description text-xl mb-4'>April 2021 - April 2022</p>
                    <p className='description text-sm'>We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America</p>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Home
