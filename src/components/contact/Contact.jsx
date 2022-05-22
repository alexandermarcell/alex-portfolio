import './Contact.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { FaMobileAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

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

  return (
    <section className="contact">
      <section className="contact__wrap">
        <article className="contact__body">
          <div className="contact__text">
            <h1 className="contact__page-heading">
              Contact Me 
            </h1>
            <p className='contact__subhead'>
              Want to send me a message? 
            </p>
            <p className="contact__subhead">
              I'd love to hear from you! 
            </p>
            <p className="contact__subhead">
              Fill out the form bellow.
            </p>
          </div>
          <div className="contact__contacts">
            <p className="contact__mobile">
              <FaMobileAlt className='contact__icon'/> M: 646-667-5247
            </p>
            <p className="contact__email">
              <MdOutlineEmail className='contact__icon'/> E: thealexmarcell@gmail.com
            </p>
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