import './Contact.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Resume from "../../assets/Icons/resume.png";
import FileDownload from 'js-file-download';
import GitHub from '../../assets/Icons/github.png';
import Gmail from '../../assets/Icons/gmail-logo.svg';
import LinkedIn from '../../assets/Icons/linkedin-circled.svg';


function Contact() {
  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message)

    axios
      .post('https://alex-portfolio-server.herokuapp.com/api/v1/messages/', {
        name,
        email,
        message,
      }).then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('There was an error: ', error)
      })
    
    navigate("/");
  }

  const download = (e) => {
    e.preventDefault();

    axios({
        url:'https://alex-portfolio-server.herokuapp.com/api/v1/download/',
        method:"GET",
        responseType:"blob"
    })
    .then((res) => {
        FileDownload(res.data, 'AlexMarcellResume.pdf')
    })
  }

  return (
    <section className="contact">
      <section className="contact__wrap">
        <article className="contact__body">
          <div className="contact__text">
            <h1 className="contact__page-heading">
              Connect With Me 
            </h1>
            <p className='contact__subhead'>
              Want to send me a message? 
            </p>
            <p className="contact__subhead">
              I'd love to hear from you! 
            </p>
            <p className="contact__subhead">
              Fill out the form.
            </p>
          </div>
          <div className="contact__socials">
            <button className='contact__info' onClick={() => window.open('https://github.com/alexandermarcell')}>
                <img className='contact__icons1' src={GitHub} alt="github icon" />
                GitHub
            </button>
            <button className='contact__info' onClick={() => window.open('https://www.linkedin.com/in/alex-marcell/')}>
                <img className='contact__icons2' src={LinkedIn} alt="linkedin icon" />
                LinkedIn
            </button>
            <button className='contact__info' onClick={() => window.location = 'mailto:thealexmarcell@gmail.com'}>
                <img src={Gmail} alt="mail icons3" className="contact__icons3" />
                Gmail
            </button>
            <button className="contact__info" onClick={(e) => download(e)}>
                <img className="contact__icons4" src={Resume} alt="" />
                My Resume
            </button>
          </div>
        </article>
        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__compartment">
            <label className="contact__label">Name:
              <input type="name" placeholder='Name' 
              className="contact__input" value={name}
              onChange={(e) => setName(e.target.value)}/>
            </label>
            <label className="contact__label">Email:
              <input type="email" placeholder='Email' 
              className="contact__input" value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="contact__label">Message:
              <textarea type="message" placeholder='Message...'  
              className='contact__textarea' value={message}
              onChange={(e) => setMessage(e.target.value)} />
            </label>
            <input type='submit' className='contact__button'/>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Contact