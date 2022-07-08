import axios from 'axios';
import { AiOutlineFilePdf, AiOutlineMail } from 'react-icons/ai';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState } from 'react';
import emailjs from 'emailjs-com'

import FileDownload from 'js-file-download';


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
          window.location.href = "#about"
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='w-full flex flex-col py-12 box-border items-center max-w-screen-2xl' id='contact'>
    <h2 className='my-4 items-center font-semibold box-border md:justify-center lg:flex-row text-5xl'>
      Connect with me 
    </h2>
      <section className='w-full flex flex-col p-4 box-border lg:flex-row'>
        <article className='w-full flex flex-col p-4 box-border items-center lg:w-4/5 xl:w-1/2'>
          <div className='w-full flex flex-col box-border items-center'>
          </div>
          <div className='flex flex-col items-center mb-8 justify-center md:flex-wrap md:mx-auto md:max-w-3xl md:flex-row'>
            <button className='m-4 cursor-pointer w-60 relative text-base items-center border-blue-800 border-2 py-3 bg-blue-800 rounded-3xl shadow-lg text-white active:translate-y-1' onClick={() => window.open('https://github.com/alexandermarcell')}>
                <FiGithub className=' absolute h-7 top-2 left-6' size={25} />
                GitHub
            </button>
            <button className='m-4 cursor-pointer w-60 relative text-base items-center border-blue-800 border-2 py-3 bg-blue-800 rounded-3xl shadow-lg text-white active:translate-y-1' onClick={() => window.open('https://www.linkedin.com/in/alex-marcell/')}>
                <FiLinkedin className='absolute h-8 top-2 left-6' size={20}/>
                LinkedIn
            </button>
            <button className='m-4 cursor-pointer w-60 relative text-base items-center border-blue-800 border-2 py-3 bg-blue-800 rounded-3xl shadow-lg text-white active:translate-y-1' onClick={() => window.location = 'mailto:thealexmarcell@gmail.com'}>
                < AiOutlineMail className='absolute h-5 top-3 left-5' size={30} />
                Gmail
            </button>
            <button className='m-4 cursor-pointer w-60 relative text-base items-center border-blue-800 border-2 py-3 bg-blue-800 rounded-3xl shadow-lg text-white active:translate-y-1' onClick={(e) => download(e)}>
                < AiOutlineFilePdf className='absolute top-3 left-6' size={20} />
                My Resume
            </button>
          </div>
          <h3 className='w-96 flex font-semibold text-base md:w-full items-center justify-center lg:text-lg'>
            Send me a message, I'd love to hear from you! 
          </h3>
          <h4 className='w-96 flex text-base md:w-full items-center justify-center font-semibold lg:text-lg'>
            Fill out the form.
          </h4>
        </article>
        <form onSubmit={sendEmail} className='w-full flex flex-col items-center box-border md:w-4/5 xl:w-1/2 xl:max-w-screen-md xl:px-4'>
          <div className='w-full flex flex-col my-2 justify-start box-border xl:max-w-screen-md xl:box-border'>
            <label className='w-full flex flex-col items-start'> Name:
              <input type="name" placeholder='Name' 
              className='w-full my-1 py-3 pl-2 rounded-3xl border-2 active:border-indigo-300' name='name' value={name}
              onChange={(e) => setName(e.target.value)} required/>
            </label>
            <label className='w-full flex flex-col items-start my-1'> Email:
              <input type="email" placeholder='Email' 
              className='w-full my-1 py-3 pl-2 rounded-3xl border-2 active:border-indigo-300' name='email' value={email} 
              onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className='w-full flex flex-col items-start my-1'>Message:
              <textarea type="message" name='message' placeholder='Message...'  
              className='w-full my-1 h-32 py-3 pl-2 rounded-3xl border-2 resize-none active:border-indigo-300' value={message}
              onChange={(e) => setMessage(e.target.value)} required/>
            </label>
            <input type='submit' className='w-full py-4 mt-4 rounded-3xl text-white border-2 bg-blue-800 active:translate-y-1'/>
          </div>
        </form>
      </section>
    </section>
  )
}

export default Contact