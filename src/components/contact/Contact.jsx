import './Contact.scss';
import axios from 'axios';
import { useState } from 'react';
import emailjs from 'emailjs-com'

import Resume from "../assets/Icons/resume.png";
import FileDownload from 'js-file-download';
import GitHub from '../assets/Icons/github.png';
import Gmail from '../assets/Icons/gmail-logo.svg';
import LinkedIn from '../assets/Icons/linkedin-circled.svg';


function Contact() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ message, setMessage ] = useState('');


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

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_cshbo9b', 'template_b3181om', e.target, 'vh3TBm5FAk2l0lQFv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id='contact'>
      <section className="contact__wrap">
        <article className="contact__body">
          <div className="contact__text">
            <h2 className="contact__page-heading">
              Connect With Me 
            </h2>
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
          <h3 className='contact__subhead1'>
            Send me a message, I'd love to hear from you! 
          </h3>
          <h4 className="contact__subhead2">
            Fill out the form.
          </h4>
        </article>
        <form onSubmit={sendEmail} className="contact__form">
          <div className="contact__compartment">
            <label className="contact__label">Name:
              <input type="name" placeholder='Name' 
              className="contact__input" name='name' value={name}
              onChange={(e) => setName(e.target.value)} required/>
            </label>
            <label className="contact__label">Email:
              <input type="email" placeholder='Email' 
              className="contact__input" name='email' value={email} 
              onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className="contact__label">Message:
              <textarea type="message" name='message' placeholder='Message...'  
              className='contact__textarea' value={message}
              onChange={(e) => setMessage(e.target.value)} required/>
            </label>
            <input type='submit' className='contact__button'/>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Contact