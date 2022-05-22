import './Dropdown.scss';
import { Link } from 'react-router-dom';
import { BsBriefcase, BsFilePerson } from 'react-icons/bs';
import { BiMessageAltEdit } from 'react-icons/bi';


function Dropdown({ isOpen, setOpen }) {
    const toggler = () => {setOpen(!isOpen)}
  return (
    <section className='dropdown'>
        <ul className='dropdown__wrap' onClick={() => toggler(!isOpen)}>
            <span className='dropdown__ex'>X</span>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <Link className='dropdown__link' to="/about">
                    <BsFilePerson/>About</Link>
            </li>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <Link className='dropdown__link' to="/contact">
                    <BiMessageAltEdit/>Contact</Link>
            </li>
            <li className='dropdown__items' onClick={() => toggler(!isOpen)}>
                <Link className='dropdown__link' to="/">
                    <BsBriefcase/>Work</Link>
            </li>
        </ul>
    </section>
  )
}

export default Dropdown