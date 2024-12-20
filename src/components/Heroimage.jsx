import React from 'react'
import "./HeroStyles.css"
import IntroImg from "../assets/intro.jpg"
import {Link} from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div classname="mask">
        <img classname="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I AM SHIVANI</p>
            <h1>FULL STACK DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Heroimage
