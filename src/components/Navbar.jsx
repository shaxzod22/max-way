import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdCheckmark } from "react-icons/io";
import { Context } from '../App';

const Navbar = () => {
  const {pathname} = useLocation()
  const {setHasBurger} = useContext(Context)
  
  return (
    <ul className='flex flex-col xl:flex-row text-[18px] items-center gap-[20px] xl:gap-[32px]'>
    <li onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className='w-full'>
    <Link to={'/'} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`}>
    <span className={`${pathname== '/'?'font-medium':''}`}>Menyu</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname =='/'?'block':'hidden'}`} />
    </Link> 
    </li>
    <li className='w-full' onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }}>
    <Link to={'/branches'} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`}>
    <span className={`${pathname.includes('/branches')?'font-medium':''}`}>Filiallar</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname.includes('/branches')?'block':'hidden'}`} />
    </Link> 
    </li>
    <li onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className='w-full'>
    <Link to={'/about'} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`}>
    <span className={`${pathname.includes('/about')?'font-medium':''} whitespace-nowrap`}>Biz haqimizda</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname.includes('/about')?'block':'hidden'}`} />
    </Link>
    </li>
     
    <li onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className='w-full'>
      <Link to={'/contact'} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`}>
    <span className={`${pathname.includes('/contact')?'font-medium':''}`}>Bog'lanish</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname.includes('/contact')?'block':'hidden'}`} />
    </Link> </li>
    </ul>
    )
  }
  
  export default Navbar
  