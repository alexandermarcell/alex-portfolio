import './navigation.scss';
import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../../assets/image/Am-logo-white.png';
import { Twirl as Hamburger } from 'hamburger-react';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    
    const toggler = () => {setOpen(!isOpen)};

  return (
    <div className='nav'>
        <div className="nav__wrap">
            <img className='nav__logo' src={Logo} alt="" />
            <div className="nav__nav-content">
                <div className="nav__handhelds">
                    <Hamburger className='nav__hamburger' color='white' size={20} toggled={isOpen} toggle={setOpen} />
                    {isOpen && 
                    <div className='nav__window' onClick={() => toggler(!isOpen)}>
                        <Dropdown setOpen={setOpen} isOpen={isOpen} />
                    </div>}
                </div>
                <div className="nav__desktop-view">
                    <ul className='nav__links'>
                        <li className='nav__items' >
                            <a className='nav__ref' href="/">About</a>
                        </li>
                        <li className='nav__items' >
                            <a className='nav__ref' href="#contact">Contact</a>
                        </li>
                        <li className='nav__items' >
                            <a className='nav__ref' href="#work">Work</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation