import './About.scss';
import reactIcon from '../../assets/Icons/react.png';
import Sass from '../../assets/Icons/sass_icon.png';
import html from '../../assets/Icons/html5.svg';
import css from '../../assets/Icons/css3.svg';
import bootStrap from '../../assets/Icons/bootstrap5.svg';
import express from '../../assets/Icons/express-js.png';
import mongoDB from '../../assets/Icons/mongodb.svg';
import axiosLogo from "../../assets/Icons/axios.svg";
import nodejs from '../../assets/Icons/node-js.svg';
import mysql from '../../assets/Icons/MySQL.svg';
import jwt from '../../assets/Icons/jwtio-json-web-token.svg';
import javaScript from '../../assets/Icons/javascript.svg';
import reduxIcon from '../../assets/Icons/redux.svg';
import MyPic from '../../assets/image/myPhoto.png';

const About = () => {

  return (
    <div className='about'>
        <div className="about__wrap">
            <div className="about__main">
                <h1 className='about__pageheader'>About Me</h1>
                <img src={MyPic} className='about__pic1' alt='me in bio' />
                <ul className="about__container">
                    <h3 className='about__intro'>
                        I’m Alex, a Web Developer.
                    </h3>
                    <li className='about__bio'>
                        I'm passionate about delivering high-quality web design through the full Web
                        development life-cycle, with ability to learn broad range of skills in order 
                        to meet requirements.  
                    </li>
                    <li className='about__bio'>
                        I have used my time to bring visually aesthetic, responsive and accessible
                        websites to the world. I have a proven history of a strong ethics and passion for web design
                    </li>
                    <li className="about__bio">
                        As a full-stack developer my focus is on building delightful, fault tolerant, React Js for optimal client experiences
                    </li>
                    <li className="about__bio">
                        My primary stack currently focuses on JavaScript, React, and Redux however I have
                        experience working with a variety of other languages such as Express and Node.
                    </li>
                </ul>
                <div className="about__skills">
                    <div className='about__front-end'>
                        <h2 className="about__title">Front-End:</h2>
                        <div className="about__gallery">
                            <img src={javaScript} alt="" className="about__icon" />
                            <img src={reactIcon} alt="" className="about__icon" />
                            <img src={Sass} alt="" className="about__icon" />
                            <img src={html} alt="" className="about__icon" />
                            <img src={css} alt="" className="about__icon" />
                            <img src={bootStrap} alt="" className="about__icon" />
                            <img src={reduxIcon} alt="" className="about__icon" />
                            <img src={axiosLogo} alt="" className="about__icon1" />
                            
                        </div>
                    </div>
                    <div className='about__back-end'>
                        <h2 className="about__title">Back-End:</h2>
                        <div className="about__gallery">
                            <img src={express} alt="" className="about__icon1" />
                            <img src={nodejs} alt="" className="about__icon" />
                            <img src={mongoDB} alt="" className="about__icon1" />
                            <img src={jwt} alt="" className="about__icon1" />
                            <img src={mysql} alt="" className="about__icon about__icon1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__pic-container">
                <img src={MyPic} className='about__pic2' alt='me in bio' />
            </div>
        </div>
    </div>
  )
}

export default About