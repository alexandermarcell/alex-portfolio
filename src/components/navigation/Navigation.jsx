import { useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import Logo from '../../assets/image/AM-logo.png';
import { Twirl as Hamburger } from 'hamburger-react';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false);
    const toggler = () => {setOpen(!isOpen)};

  return (
    <div className='w-full h-16 flex flex-col px-2 items-center justify-center box-border'>
        <div className="w-full relative flex max-w-5xl items-center justify-between">
            <img className='w-full max-w-[225px]' src={Logo} alt="" />
            <div className="w-full flex box-border justify-end">
                <div className="w-full flex relative justify-end lg:hidden">
                    <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
                    {isOpen && 
                    <div className='w-screen h-screen -top-3 -right-3 z-50 absolute bg-blue-900' 
                    onClick={() => toggler(!isOpen)}>
                        <Dropdown setOpen={setOpen} isOpen={isOpen} />
                    </div>}
                </div>
                <div className='hidden lg:flex justify-end'>
                    <ul className='w-full flex'>
                        <li className='cursor-pointer text-base italic' >
                            <a className='no-underline list-none' href="/">About</a>
                        </li>
                        <li className='cursor-pointer text-base  italic ml-8' >
                            <a className='no-underline list-none' href="#contact">Contact</a>
                        </li>
                        <li className='cursor-pointer text-base italic ml-8' >
                            <a className='no-underline list-none' href="#work">Work</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navigation