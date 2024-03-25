import React, { useEffect, useState } from 'react'

const Home = () => {  

  return (
    <div>
        <div className='w-full h-screen p-20 flex'>
            <div className='w-1/2 h-full text-left flex flex-col justify-between'>
                <div>
                    <h1 className='header'>Ford Burgess</h1>
                    <h3 className='subtitle'>Full Stack Developer</h3>                    
                </div>
                <div>               
                    <p className='description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>         
        </div>
        
    </div>
  )
}

export default Home
