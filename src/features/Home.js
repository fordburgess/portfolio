import React, { useEffect } from 'react'

const Home = () => {    

  useEffect(() => {
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle')

    const resize = () => {
        const scrollPos = window.scrollY;

        title.style.fontSize = `clamp(2.5rem, ${6 - (scrollPos * 0.05)}rem, 6rem)`;
        subtitle.style.fontSize = `clamp(1rem, ${2 - (scrollPos * 0.045)}rem, 2rem)`;        
    }

    window.addEventListener('scroll', resize)

    return () => {
        window.removeEventListener('scroll', resize)
    }
  }, [])


  return (
    <div style={{ height: '200vh' }}>
        <div className='w-full h-screen p-20 flex'>
            <div className='w-full h-full text-center flex flex-col justify-center'>
                <div>
                    <h1 className='header' id="title" style={{ fontSize: '6rem'}}>Ford Burgess</h1>
                    <h3 className='subtitle' id="subtitle" style={{ fontSize: '2rem'}}>Full Stack Developer</h3>                    
                    {/* <p className='description'>
                        I love my gf!!
                    </p> */}
                </div>                
            </div>         
        </div>
    </div>
  )
}

export default Home
