import './header.scss';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/image/AM-logo.png';
import Navigation from '../navigation/Navigation';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <div className='header'>
        <div className="header__wrap">
            <img className='header__logo' src={Logo} alt="" onClick={() => navigate('/')} />
            <Navigation />
        </div>
    </div>
  )
}

export default Header