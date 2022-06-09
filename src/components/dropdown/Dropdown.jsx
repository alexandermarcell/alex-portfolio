import './Dropdown.scss';
import { BsBriefcase, BsFilePerson } from 'react-icons/bs';
import { BiMessageAltEdit } from 'react-icons/bi';
import { Twirl as Hamburger } from 'hamburger-react';


function Dropdown({ isOpen, setOpen }) {
    const toggler = () => {setOpen(!isOpen)}
  return (
    <section className='dropdown'>
        <ul className='dropdown__wrap' onClick={() => toggler(!isOpen)}>
            <div className="dropdown__hamburger">
                <Hamburger color='white' size={20} toggled={isOpen} toggle={setOpen} />
            </div>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <a className='dropdown__link' href="#about">
                    <BsFilePerson/>
                    About
                </a>
            </li>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <a className='dropdown__link' href="#contact">
                    <BiMessageAltEdit/>
                    Contact
                </a>
            </li>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <a className='dropdown__link' href="#work">
                    <BsBriefcase/>
                    Work
                </a>
            </li>
        </ul>
    </section>
  )
}

export default Dropdown