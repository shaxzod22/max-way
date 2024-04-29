import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import Logo from './../../assets/img/maxwayLogo.webp'

const Header = () => {
  return (
    <header className=' py-4 w-full px-4 '>
    <div className="w-[1200px] mx-auto">
    <div className="flex items-center gap-[40px]">
    <Link to={'/'}>
    <img src={Logo} alt="logo" className='w-[48px] h-[48px]' />
    </Link>
    
    <Navbar/>
    </div>
    </div>
    </header>
    )
  }
  
  export default Header
  