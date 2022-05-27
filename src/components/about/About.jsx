import './About.scss';
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
                {/* <div className="about__socials">
                    <button className='about__info' onClick={() => window.open('https://github.com/alexandermarcell')}>
                        <img className='about__icons1' src={GitHub} alt="github icon" />
                        GitHub
                    </button>
                    <button className='about__info' onClick={() => window.open('https://www.linkedin.com/in/alex-marcell/')}>
                        <img className='about__icons2' src={LinkedIn} alt="linkedin icon" />
                        LinkedIn
                    </button>
                    <button className='about__info' onClick={() => window.location = 'mailto:thealexmarcell@gmail.com'}>
                        <img className='about__icons3' src={Gmail} alt="gmail icon" />
                        Gmail
                    </button>
                    <button className="about__info" onClick={(e) => download(e)}>
                        <img className="about__icons4" src={Resume} alt="" />
                        My Resume
                    </button>
                </div> */}
            </div>
            <img src={MyPic} className='about__pic2' alt='me in bio' />
        </div>
    </div>
  )
}

export default About