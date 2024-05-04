import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import Navbar from '../Navbar'
import Logo from './../../assets/img/maxwayLogo.webp'
import Wallet from '../Wallet';

const Header = () => {
  const [hasBurger,setHasBurger] = useState(false)
  const [hasIntroModal,setHasIntroModal] = useState(false)
  const [isAllowToSubmit,setIsAllowToSubmit] = useState(false)
 
  function handleSubmit(e){
  if(!isAllowToSubmit){
  e.preventDefault()
  }
  }
  
  return (
    <header className=' w-full  '>
    <div className={`absolute z-10 justify-center items-center top-0 bottom-0 left-0 right-0 bg-[#00000029] ${hasIntroModal?'flex':'hidden'}`}>
    <div className="bg-white p-8 w-[444px] flex flex-col items-center rounded-lg">
    <span className='self-end text-[22px] cursor-pointer' onClick={()=>setHasIntroModal(!hasIntroModal)}>X</span>
    <h1 className='text-[32px] pb-2'>Tizimga kirish</h1>
    <p className='text-[18px] text-gray-400 mb-8'>Telefon raqamingiz bilan tizimga kiring</p>
    <form onSubmit={handleSubmit} className='flex flex-col w-full items-center'>
    <p className='self-start mb-[8px]'>Telefon raqam</p>
    <input onChange={(e)=>{
    if(e.target.value.trim().length==13){
      setIsAllowToSubmit(true)
        }else if(e.target.value.trim().length<13){
          setIsAllowToSubmit(false)
        }
      
      }} name='telInput' type="tel" className='w-full border-[1px] border-gray-300 rounded-lg py-[12px] pl-[24px] outline-[#51267d]' defaultValue='+998' />
    <button type='submit' className={`mt-8 h-[44px] w-full rounded-lg bg-gray-200 text-[14px] font-semibold tracking-[1px] text-gray-400 ${isAllowToSubmit?'cursor-pointer':'cursor-not-allowed'}`}>Kodni yuborish</button>
    </form>
    </div>
    </div>
    
    <div className={`xl:hidden ${hasBurger?'block':'hidden'} absolute top-0 left-0 w-[288px] bg-white h-screen`}>
    
    <div className="flex bg-[#F6F8F9] items-center w-full justify-between pl-7 pr-2">
    <h2 className='text-[22px] font-semibold'>Menyu</h2>
    <span onClick={()=>setHasBurger(!hasBurger)} className='p-2 text-[22px]'>X</span>
    </div>
    
    <div className="p-4">
    <div className="my-4 pb-4 border-b-[1px] border-gray-200">
    <p onClick={()=>{
      setHasIntroModal(!hasIntroModal)
      setHasBurger(!hasBurger)
    }} className='text-[#51267d] text-[18px] px-4 mb-[3px] font-semibold'>Kirish</p>
    </div>
    
    <div className="">
    <Navbar/>
    </div>
    
    </div>
    </div>
    <div className="max-w-[1200px] py-4 px-4 mx-auto flex items-center justify-between">
    <div className="flex items-center xl:gap-[40px]">
    <button onClick={()=>setHasBurger(!hasBurger)} className='block xl:hidden p-2 cursor-pointer'><GiHamburgerMenu className='w-6 h-6' /></button>
    
    <Link to={'/'}>
    <img src={Logo} alt="logo" className='w-[38px] h-[38px] xl:w-[48px] xl:h-[48px]' />
    </Link>
    
    <div className="hidden xl:block">
    <Navbar />
    </div>
    </div>
    <div className="flex items-center gap-[32px]">
    <button className='hidden xl:flex items-center gap-2'>
    <div className="w-[32px] h-[35px] flex items-center justify-center bg-[#F1EFF4] rounded-full">
    <FaLocationDot className='w-[13px] h-[16px]' />
    </div>
    <div className='text-[13px]'>
    <p >Yetkazib berish yoki Olib ketish</p>
    <p className='text-[#51267d]'>Qabul qilib olish turini tanlang</p>
    </div>
    </button>
    
    <div className="flex items-center gap-[12px]">
    <Wallet/>
    <button onClick={()=>setHasIntroModal(!hasIntroModal)} className='hidden xl:block'>
    <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#F1EFF4] rounded-full">
    <BsFillPersonFill className='w-[18px] h-[18px]' />
    </div>
    </button>
    </div>
    </div>
    </div>
    </header>
    )
  }
  
  export default Header
  