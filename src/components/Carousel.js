import React, { useRef, useEffect } from 'react'
import Javascript from "../assets/js.png"
import Typescript from "../assets/ts.png"
import CSS from "../assets/css.png"
import Azure from "../assets/azure.png"
import HTML from "../assets/html.png"
import Tailwind from "../assets/tailwind.png"
import Rails from "../assets/rails.png"
import Ruby from "../assets/ruby.png"
import CSharp from "../assets/c-sharp.png"
import SQLServer from "../assets/sql-server.png"
import Node from "../assets/node.png"
import "./styles/Carousel.css"

const Carousel = () => {
   
  const images = [Javascript, CSS, Azure, Typescript, HTML, Tailwind, Rails, Ruby, CSharp, SQLServer, Node];

  return (
    <div className='h-60 slider'>
        <div className='slide-track'>
            {
                images.map((image, index) => {
                    return (
                        <img src={image} alt="icons8" className='h-14 w-14 m-20'/>
                    )
                })
            }
            {
                images.map((image, index) => {
                    return (
                        <img src={image} alt="icons8" className='h-14 w-14 m-20'/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Carousel
