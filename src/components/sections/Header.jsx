import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import Navbar from '../Navbar'
import Logo from './../../assets/img/maxwayLogo.webp'
import Wallet from '../Wallet';
import { Context } from '../../App';


const Header = () => {
  const [hasIntroModal,setHasIntroModal,place,setPlace,deliveryType,setDeliveryType,hasPlaceChange,setHasPlaceChange,hasBurger,setHasBurger] = useContext(Context)
  const [isAllowToSubmit,setIsAllowToSubmit] = useState(false)
  
  
  function handleSubmit(e){
    if(!isAllowToSubmit){
      e.preventDefault()
    }
  }

  function handleSubmit(e){
  e.preventDefault()
let place = e.target.place.value.trim()
setPlace(place)

e.target.place.value = ''
  }
  
  return (
    <header className=' w-full  '>
    <div className={`fixed h-screen z-10 justify-center items-center top-0 bottom-0 left-0 right-0 bg-[#00000029] ${hasIntroModal?'flex':'hidden'}`}>
    <div className="bg-white p-8 w-[444px] flex flex-col items-center rounded-lg">
    <span className='self-end text-[22px] cursor-pointer' onClick={()=>{
      setHasIntroModal(!hasIntroModal)
      document.body.style.overflow ='auto'
    }}>X</span>
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
    
    <div className={`${hasPlaceChange?'flex':'hidden'} flex-col fixed h-screen z-10  justify-center items-center top-0 bottom-0 left-0 right-0 bg-[#00000029]`}>
    <iframe className='xl:hidden' src="https://yandex.com/map-widget/v1/?um=constructor%3A5e9228ba2b1b5ff63d090dae6a22d35154e53d9fa5ab4b3e2d60f16e140784e6&amp;source=constructor" width="100%" height="200" frameborder="0"></iframe>
    
    <div className="bg-white flex flex-col w-full rounded-xl  max-w-[992px]  pt-[30px] pb-[25px] pl-[25px] pr-4">
    <span className='text-end xl:hidden cursor-pointer text-[25px]' onClick={()=>{
      setHasPlaceChange(false)
      document.body.style.overflow ='auto'
      }}>X</span>
    <div className="flex w-full justify-between items-center">
    <h2 className='text-[20px] md:text-[25px] font-semibold md:font-bold'>Qabul qilib olish turini tanlang</h2>
    <span className='cursor-pointer hidden xl:inline-block text-[25px]' onClick={()=>{
      setHasPlaceChange(false)
      document.body.style.overflow ='auto'
      }}>X</span>
    </div>
    <p className='text-[#808080] text-[14px] pb-4'>Real vaqt va joylashuvga mos menyuni ko'rish uchun</p>

    <div className="flex w-full justify-between gap-4">
    <div className="xl:max-w-[461px] xl:h-[430px]  w-full">
    
    <div className="flex items-center mb-5 gap-3 justify-between">
    <button className={`max-w-full w-full h-[44px] bg-[#F1EFF4] rounded-3xl sm:text-[18px] ${deliveryType=='Yetkazib berish'?'text-[#51267D]':''}`} onClick={()=>setDeliveryType('Yetkazib berish')}>Yetkazib berish</button>

    <button className={`max-w-full  w-full h-[44px] bg-[#F1EFF4] rounded-3xl sm:text-[18px] ${deliveryType=='Olib ketish'?'text-[#51267D]':''}`} onClick={()=>setDeliveryType('Olib ketish')}>Olib ketish</button>
    </div>

<form className='flex flex-col h-[200px] xl:h-[360px]' onSubmit={(e)=>handleSubmit(e)}>
  <input type="text" name='place' className='border-2 py-[8px] px-[16px] text-[14px] w-full rounded-xl focus:border-gray-500 border-gray-300 outline-none' placeholder='Yetkazib berish manzili' />

  <button onClick={()=>{
      setHasPlaceChange(false)
      document.body.style.overflow ='auto'
      }} className='mt-auto bg-[#DDE2E4] py-3 px-6 rounded-3xl' type='submit'>Belgilash</button>
</form>
    </div>

    <div className="max-w-[461px] hidden xl:block w-full h-[410px]">
    <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A5e9228ba2b1b5ff63d090dae6a22d35154e53d9fa5ab4b3e2d60f16e140784e6&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    </div>
    </div>
    </div>
    
    <div className={`xl:hidden ${hasBurger?'block':'hidden'} fixed top-0 z-10 left-0 w-full max-w-[288px] bg-white h-screen`}>
    
    <div className="flex bg-[#F6F8F9] items-center w-full justify-between pl-7 pr-2">
    <h2 className='text-[22px] font-semibold'>Menyu</h2>
    <span onClick={()=>{
      setHasBurger(!hasBurger)
      document.body.style.overflow ='auto'
    }} className='p-2 text-[22px]'>X</span>
    </div>
    
    <div className="p-4">
    <div className="my-4 pb-4 border-b-[1px] border-gray-200">
    <p onClick={()=>{
      setHasIntroModal(!hasIntroModal)
      setHasBurger(false)
      document.body.style.overflow ='hidden'
    }} className='text-[#51267d] text-[18px] px-4 mb-[3px] font-semibold'>Kirish</p>
    </div>
    
    <div className="">
    <Navbar />
    </div>
    
    </div>
    </div>
    <div className="max-w-[1200px] py-4 px-4 mx-auto flex items-center justify-between">
      
    <div className="flex items-center xl:gap-[40px]">
    <button onClick={()=>{
      setHasBurger(!hasBurger)
      document.body.style.overflow ='hidden'
    }} className='block xl:hidden p-2 cursor-pointer'><GiHamburgerMenu className='w-6 h-6' /></button>
    
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
    <div onClick={()=>{
      setHasPlaceChange(true)
      document.body.style.overflow ='hidden'
      }} className='text-[13px] cursor-pointer'>
    <p >{deliveryType?deliveryType:'Yetkazib berish yoki Olib ketish'}</p>
    <p className='text-[#51267d]'>{place?place:'Qabul qilib olish turini tanlang'}</p>
    </div>
    </button>
    
    <div className="flex items-center gap-[12px]">
    <Wallet/>
    <button onClick={()=>{
      setHasIntroModal(!hasIntroModal)
      document.body.style.overflow ='hidden'
    }} className='hidden xl:block'>
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
  