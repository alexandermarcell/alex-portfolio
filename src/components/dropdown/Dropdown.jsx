import './Dropdown.scss';
import { Link } from 'react-router-dom';
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
                <Link className='dropdown__link' to="/about">
                    <BsFilePerson/>
                    About
                </Link>
            </li>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <Link className='dropdown__link' to="/contact">
                    <BiMessageAltEdit/>
                    Contact
                </Link>
            </li>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <Link className='dropdown__link' to="/">
                    <BsBriefcase/>
                    Work
                </Link>
            </li>
        </ul>
    </section>
  )
}

export default Dropdown