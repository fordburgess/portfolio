import React, { useState, useRef, useEffect } from 'react'
import Javascript from "../assets/js.png"
import JavascriptColor from "../assets/js-color.png"
import Typescript from "../assets/ts.png"
import TypescriptColor from "../assets/ts-color.png"
import CSS from "../assets/css.png"
import CSSColor from "../assets/css-color.png"
import Azure from "../assets/azure.png"
import AzureColor from "../assets/azure-color.png"
import HTML from "../assets/html.png"
import HTMLColor from "../assets/html-color.png"
import Tailwind from "../assets/tailwind.png"
import TailwindColor from "../assets/tailwind-color.png"
import Rails from "../assets/rails.png"
import RailsColor from "../assets/rails-color.png"
import Ruby from "../assets/ruby.png"
import RubyColor from "../assets/ruby-color.png"
import CSharp from "../assets/c-sharp.png"
import CSharpColor from "../assets/c-sharp-color.png"
import SQLServer from "../assets/sql-server.png"
import SQLServerColor from "../assets/sql-server-color.png"
import Node from "../assets/node.png"
import NodeColor from "../assets/node-color.png"
import Next from '../assets/next.png'
import NextColor from '../assets/next-color.png'
import "./styles/Carousel.css"

const Carousel = () => {
  const [hover, setHover] = useState(Array(11).fill(false));

  const images = [
    [Javascript, JavascriptColor], [CSS, CSSColor], [Azure, AzureColor], [Typescript, TypescriptColor], [HTML, HTMLColor], [Next, NextColor], [Tailwind, TailwindColor], [Rails, RailsColor], [Ruby, RubyColor], [CSharp, CSharpColor], [SQLServer, SQLServerColor], [Node, NodeColor], [Javascript, JavascriptColor], [CSS, CSSColor], [Azure, AzureColor], [Typescript, TypescriptColor], [Next, NextColor], [HTML, HTMLColor], [Tailwind, TailwindColor], [Rails, RailsColor], [Ruby, RubyColor], [CSharp, CSharpColor], [SQLServer, SQLServerColor], [Node, NodeColor]
  ];

  const changeBg = (index, condition) => {
    var newArr = Array(11).fill(false);
    newArr[index] = condition;

    setHover(newArr);
  }

  useEffect(() => {
    console.log(hover)
  }, [hover])

  return (
    <div className='h-40 slider text-left mb-32'>
        <h3 className='subtitle px-6 text-2xl m-0'>Some tech that I work with</h3>
        <div className='slide-track'>
            {
              images.map((image, index) => {
                  return (
                      <>
                          <img onMouseOver={() => changeBg(index, true)} onMouseLeave={() => changeBg(index, false)} src={hover[index] ? image[1] : image[0]} alt="icons8" className='h-14 w-14 m-20'/>
                          {/* <p className='description'>Javascript</p> */}
                      </>
                  )
              })
            }            
        </div>
    </div>
  )
}

export default Carousel
