import reactIcon from '../../assets/Icons/react.png';
import Sass from '../../assets/Icons/sass_icon.png';
import html from '../../assets/Icons/html5.svg';
import css from '../../assets/Icons/css3.svg';
import bootStrap from '../../assets/Icons/bootstrap5.svg';
import tailwind from '../../assets/Icons/tailwindcss.svg';
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
    <div className='w-full flex flex-col mx-auto max-w-screen-2xl box-border items-center my-14' 
    id='about'>
        <h2 className="w-full flex justify-center font-bold text-5xl my-8">
            Hi, I'm Alex
        </h2>
        <div className="w-full flex flex-col items-center box-border 
        lg:flex-row lg:justify-center lg:p-1 lg:max-w-screen-lg xl:max-w-screen-2xl">
            <img src={MyPic} 
            className='w-full lg:w-1/2 flex p-4 max-w-md mb-4 lg:max-w-sm rounded-3xl' 
            alt='me in bio' 
            />
            <div className="w-full flex flex-col items-center px-2 lg:w-1/2 lg:justify-between lg:ml-2 box-border">
                <p className='w-full py-2 max-w-lg box-border text-lg'>
                    I'm a Full-Stack Web Developer residing in NYC.
                    My primary stack currently focuses on JavaScript, React, and currently learning Redux. 
                    However I have experience working with a variety of other libraries.
                </p>
                <div className="w-full flex flex-col max-w-lg box-border my-8">
                    <h2 className="py-4 font-semibold text-xl">Current Stack:</h2>
                    <div className="w-full flex flex-row flex-wrap items-center justify-center max-w-3xl">
                        <img src={javaScript} alt="" className="h-12 mx-1" />
                        <img src={reactIcon} alt="" className="h-12 mx-1" />
                        <img src={Sass} alt="" className="h-12 mx-1" />
                        <img src={html} alt="" className="h-12 mx-1" />
                        <img src={css} alt="" className="h-12 mx-1" />
                        <img src={bootStrap} alt="" className="h-12 mx-1" />
                        <img src={tailwind} alt="" className="h-12 mx-1" />
                        <img src={reduxIcon} alt="" className="h-12 mx-1" />
                        <img src={axiosLogo} alt="" className="mx-1 w-28" />
                        <img src={express} alt="" className="mx-1 w-28" />
                        <img src={nodejs} alt="" className="h-12 mx-1" />
                        <img src={mongoDB} alt="" className="mx-1 w-28" />
                        <img src={jwt} alt="" className="mx-1 w-28" />
                        <img src={mysql} alt="" className="h-12 mx-1 w-28" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About