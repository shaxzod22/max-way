import React from 'react'
import { Link,useLocation } from 'react-router-dom'
import Navbar from '../Navbar'
import Logo from './../../assets/img/maxwayLogo.webp'
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
    const {pathname} = useLocation()
    
    return (
        <footer className='w-full border-t-2 border-gray-200 mt-[80px]'>
        <div className="max-w-[1200px] flex-col  mb-5 relative mx-auto pt-8 px-5 pb-10 flex xl:items-center xl:justify-center border-b-2 border-gray-200">
        <Link className='xl:absolute xl:left-[16px]' to={'/'}>
        <img src={Logo} alt="logo" className='w-[38px] h-[38px] xl:w-[48px] xl:h-[48px]' />
        </Link>
        
        <div className='flex pt-[20px] xl:pt-0 flex-col xl:flex-row text-[18px] items-center gap-[8px] lg:gap-[20px] xl:gap-[32px]'>
        <Link className={` flex w-full justify-between items-center  mb-[3px]`} to={'/branches'}>
        <span className={`${pathname.includes('/branches')?'font-medium':''}`}>Filiallar</span>
        
        </Link> 
        <Link className={` flex w-full justify-between items-center  mb-[3px]`} to={'/about'}>
        <span className={`${pathname.includes('/about')?'font-medium':''} whitespace-nowrap`}>Biz haqimizda</span>
        
        </Link> 
        <Link className={` flex w-full justify-between items-center  mb-[3px]`} to={'/contact'}>
        <span className={`${pathname.includes('/contact')?'font-medium':''}`}>Bog'lanish</span>
        
        </Link> 
        </div>
        </div>

        <div className="max-w-[1200px] flex items-center justify-between mx-auto px-4 pb-8">
        <p className='opacity-60 text-[14px] lg:text-[19px]'>© Delever 2020 - 2024 Barcha huquqlar himoyalangan</p>
        <div className="flex items-center gap-1 lg:gap-5 text-gray-500">
        <Link className='w-6 h-6 flex items-center justify-center' to={'https://www.instagram.com/maxwayuz/'}>
        <FaInstagram className='w-5 h-5' />
        </Link>
        <Link className='w-6 h-6 flex items-center justify-center' to={'https://www.facebook.com/maxway.uzb/'}>
        <BsFacebook className='w-5 h-5' />
        </Link>
        <Link className='w-6 h-6 flex items-center justify-center' to={'https://www.youtube.com/@maxway2010'}>
        <FaYoutube className='w-5 h-5' />
        
        </Link>
        </div>
        </div>
        </footer>
        )
    }
    
    export default Footer
    