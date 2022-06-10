import './About.scss';
import reactIcon from '../assets/Icons/react.png';
import Sass from '../assets/Icons/sass_icon.png';
import html from '../assets/Icons/html5.svg';
import css from '../assets/Icons/css3.svg';
import bootStrap from '../assets/Icons/bootstrap5.svg';
import express from '../assets/Icons/express-js.png';
import mongoDB from '../assets/Icons/mongodb.svg';
import axiosLogo from "../assets/Icons/axios.svg";
import nodejs from '../assets/Icons/node-js.svg';
import mysql from '../assets/Icons/MySQL.svg';
import jwt from '../assets/Icons/jwtio-json-web-token.svg';
import javaScript from '../assets/Icons/javascript.svg';
import reduxIcon from '../assets/Icons/redux.svg';
import MyPic from '../assets/image/myPhoto.png';

const About = () => {

  return (
    <div className='about' id='about'>
        <h2 className="about__pageheader">
            About Me
        </h2>
        <div className="about__wrap">
            <img src={MyPic} className='about__pic' alt='me in bio' />
            <div className="about__main">
                <p className='about__bio'>
                    I'm a Full-Stack Web Developer residing in NYC.
                    My primary stack currently focuses on JavaScript, React, and currently learning Redux. 
                    However I have experience working with a variety of other libraries.
                </p>
                <div className="about__skills">
                    <h2 className="about__title">Current Stack:</h2>
                    <div className="about__gallery">
                        <img src={javaScript} alt="" className="about__icon" />
                        <img src={reactIcon} alt="" className="about__icon" />
                        <img src={Sass} alt="" className="about__icon" />
                        <img src={html} alt="" className="about__icon" />
                        <img src={css} alt="" className="about__icon" />
                        <img src={bootStrap} alt="" className="about__icon" />
                        <img src={reduxIcon} alt="" className="about__icon" />
                        <img src={axiosLogo} alt="" className="about__icon1" />
                        <img src={express} alt="" className="about__icon1" />
                        <img src={nodejs} alt="" className="about__icon" />
                        <img src={mongoDB} alt="" className="about__icon1" />
                        <img src={jwt} alt="" className="about__icon1" />
                        <img src={mysql} alt="" className="about__icon about__icon1" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About