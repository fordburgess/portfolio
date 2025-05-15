import React, { useState, useEffect } from 'react'
import experience from "../json/Experience.json"
import Carousel from '../components/Carousel'
import './styles/Home.css';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const mobile = useMediaQuery({ query: '(max-width: 900px)' })

  useEffect(() => {
    const leftInfo = document.getElementById('left-info');
    const title = document.getElementById('home-title');
    const subtitle = document.getElementById('home-subtitle');
    const description = document.getElementById('description-and-nav');

    const professional = document.getElementById('professional-marker');
    const freelance = document.getElementById('freelance-marker');

    const resize = () => {
        const scrollPos = window.scrollY;

        if (mobile) {

          title.style.fontSize = `clamp(3rem, ${6 - (scrollPos * 0.015)}rem, 6rem)`;
          subtitle.style.fontSize = `clamp(1.25rem, ${2.5 - (scrollPos * 0.007)}rem, 2.5rem)`;

          var leftValTitle = 29 - (scrollPos * 0.115) > 0 ? 29 - (scrollPos * 0.115) : 0;
          var leftValSubtitle = 36.5 - (scrollPos * 0.125) > 0 ? 36.5 - (scrollPos * 0.125) : 0;

          title.style.left = `${leftValTitle}%`;
          subtitle.style.left = `${leftValSubtitle}%`;

          title.style.top = `clamp(7%, ${35 - scrollPos * 0.105}%, 35%)`;
          subtitle.style.top = `clamp(16%, ${52 - scrollPos * 0.125}%, 52%)`;

          var opacityVal;

          if (scrollPos >= 2308) {
              var disappearDiff = 2420 - scrollPos;
              opacityVal = disappearDiff / 80;

              leftInfo.style.opacity = `clamp(0, ${opacityVal}, 1)`;
              console.log(leftInfo.style.opacity);
          }
          else {
              var step = -200 + scrollPos;
              opacityVal = step / 500;
              description.style.opacity = `clamp(0, ${opacityVal}, 1)`;
          }

          if (scrollPos >= 700 && scrollPos <= 1100) {
              professional.classList.add('active-marker');
              freelance.classList.remove('active-marker');

              setActiveSection('professional')
          }

          if (scrollPos >= 1100) {
              freelance.classList.add('active-marker');
              professional.classList.remove('active-marker');

              setActiveSection('freelance')
          }
        }
    }

    resize();

    window.addEventListener('scroll', resize);

    return () => {
        window.removeEventListener('scroll', resize);
    }
  }, [])

  return (
    <div style={{ boxSizing: 'border-box' }}>
        <div className='w-full h-screen py-4 px-6 sticky top-0'>
            <div className='w-full h-full relative' id="left-info">
                <h1 className='header' id="home-title" style={{ fontSize: '6rem'}}>Ford Burgess</h1>
                <h3 className='subtitle' id="home-subtitle" style={{ fontSize: '2rem'}}>Full Stack Developer</h3>
                <div id="description-and-nav">
                    <p className='description mb-8' id="home-description">I combine my affinity for design and passion for complex, technical projects to build applications that are appealing, accessible, and most of all, helpful and enjoyable to use.</p>
                    <ul>
                        <li className="marker flex items-center" id="professional-marker">
                            <h4 className='font-montserrat mr-4'>Professional</h4>
                            <svg width="50" height="2" id="professional-svg">
                                <line x1="0" y1="2" x2="50" y2="2" stroke={activeSection == 'professional' ? 'rgb(211, 201, 3)' : '#FFFFFF'} strokeWidth={2} />
                            </svg>
                        </li>
                        <li className="marker flex items-center" id="freelance-marker">
                            <h4 className='font-montserrat mr-4'>Freelance</h4>
                            <svg width="50" height="2" id="freelance-svg">
                                <line x1="0" y1="2" x2="50" y2="2" stroke={activeSection == 'freelance' ? 'rgb(211, 201, 3)' : '#FFFFFF'} strokeWidth={2} />
                            </svg>
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
                                <div className='description text-sm mb-3' dangerouslySetInnerHTML={{__html: item.description}}></div>
                                <div  className='w-full flex flex-wrap'>
                                    {
                                        item.stack.map((tech, i) => {
                                            return (
                                                <div key={i} className='px-2 py-0.5 bg-white bg-opacity-60 rounded-xl m-1'>
                                                    <p className='description m-0 text-sm text-black'>{tech}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {
                    experience.experience.freelance.map((item, index) => {
                        return (
                            <div className='w-3/4 flex flex-col justify-start items-start mb-16' id="experience-section" key={item.name}>
                                <h3 className='subtitle font-black'><strong>{item.name}</strong></h3>
                                <p className='description text-xl mb-3'>{item.dates}</p>
                                <div className='description text-sm mb-3' dangerouslySetInnerHTML={{__html: item.description}}></div>
                                {
                                    item.name !== "1er" ? (
                                        <a target="_blank" href={item.previewLink}>
                                            <img className='mb-3 preview-image' src={require(`../assets/${item.preview}`)} alt={item.name}/>
                                        </a>
                                    ) : (
                                        <img className='mb-3 preview-image' id="premierImage" src={require(`../assets/${item.preview}`)} alt={item.name}/>
                                    )
                                }
                                <div  className='w-full flex flex-wrap'>
                                    {
                                        item.stack.map((tech, i) => {
                                            return (
                                                <div key={i} className='px-2 py-0.5 bg-white bg-opacity-70 rounded-xl m-1'>
                                                    <p className='description m-0 text-sm text-black'>{tech}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='w-screen'>
          <Carousel />
        </div>
    </div>
  )
}

export default Home
