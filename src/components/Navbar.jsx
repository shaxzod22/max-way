import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdCheckmark } from "react-icons/io";
import { Context } from '../App';

const Navbar = () => {
  const {pathname} = useLocation()
  const [setHasBurger] = useContext(Context)
 
  return (
    <div className='flex flex-col xl:flex-row text-[18px] items-center gap-[20px] xl:gap-[32px]'>
    <Link onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`} to={'/'}>
    <span className={`${pathname== '/'?'font-medium':''}`}>Menyu</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname =='/'?'block':'hidden'}`} />
    </Link> 
    <Link onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`} to={'/branches'}>
    <span className={`${pathname.includes('/branches')?'font-medium':''}`}>Filiallar</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname.includes('/branches')?'block':'hidden'}`} />
    </Link> 
    <Link onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`} to={'/about'}>
    <span className={`${pathname.includes('/about')?'font-medium':''} whitespace-nowrap`}>Biz haqimizda</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname.includes('/about')?'block':'hidden'}`} />
    </Link> 
    <Link onClick={()=>{
      setHasBurger(false)
      document.body.style.overflow ='auto'
    }} className={` flex w-full justify-between items-center px-4 xl:px-0 mb-[3px]`} to={'/contact'}>
    <span className={`${pathname.includes('/contact')?'font-medium':''}`}>Bog'lanish</span>
    <IoMdCheckmark className={`xl:hidden text-[#51267D] w-6 h-6 ${pathname.includes('/contact')?'block':'hidden'}`} />
    </Link> 
    </div>
    )
  }
  
  export default Navbar
  