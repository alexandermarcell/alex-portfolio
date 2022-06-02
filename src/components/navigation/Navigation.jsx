import './navigation.scss';
import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/image/AM-logo.png';
import { Twirl as Hamburger } from 'hamburger-react';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    
    const toggler = () => {setOpen(!isOpen)};

  return (
    <div className='nav'>
        <div className="nav__wrap">
            <img className='nav__logo' src={Logo} alt="" onClick={() => navigate('/')} />
            <div className="nav__nav-content">
                <div className="nav__handhelds">
                    <Hamburger className='nav__hamburger' size={20} toggled={isOpen} toggle={setOpen} />
                    {isOpen && 
                    <div className='nav__window' onClick={() => toggler(!isOpen)}>
                        <Dropdown setOpen={setOpen} isOpen={isOpen} />
                    </div>}
                </div>
                <div className="nav__desktop-view">
                    <ul className='nav__links'>
                        <li className='nav__items' onClick={() => navigate("/about")} >
                            About
                        </li>
                        <li className='nav__items' onClick={() => navigate("/contact")} >
                            Contact
                        </li>
                        <li className='nav__items' onClick={() => navigate("/")} >
                            Work
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation