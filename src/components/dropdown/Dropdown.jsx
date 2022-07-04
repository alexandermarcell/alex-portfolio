import { BsBriefcase, BsFilePerson } from 'react-icons/bs';
import { BiMessageAltEdit } from 'react-icons/bi';
import { Twirl as Hamburger } from 'hamburger-react';


function Dropdown({ isOpen, setOpen }) {
    const toggler = () => {setOpen(!isOpen)}
  return (
    <section className='w-full flex items-center justify-center box-border'>
        <ul className='w-full p-2 relative list-none box-border' onClick={() => toggler(!isOpen)}>
            <div className='flex flex-col items-end pr-1'>
                <Hamburger color='white' size={20} toggled={isOpen} toggle={setOpen} />
            </div>
            <li className='w-full mt-8 font-semibold text-xl text-white items-center no-underline active:translate-y-1' onClick={() => toggler(!isOpen)}>
                <a className='flex items-center justify-center text-white' href="#about">
                    <BsFilePerson className='mr-4'/>
                    About
                </a>
            </li>
            <li className='w-full mt-8 font-semibold text-xl text-white items-center no-underline active:translate-y-1' onClick={() => toggler(!isOpen)}>
                <a className='flex items-center text-white justify-center' href="#contact">
                    <BiMessageAltEdit className='mr-4'/>
                    Contact
                </a>
            </li>
            <li className='w-full mt-8 font-semibold text-xl text-white items-center no-underline active:translate-y-1' onClick={() => toggler(!isOpen)}>
                <a className='flex items-center text-white justify-center' href="#work">
                    <BsBriefcase className='mr-4'/>
                    Work
                </a>
            </li>
        </ul>
    </section>
  )
}

export default Dropdown