import React from 'react'
import QRmaxway from './../assets/img/QRmaxway.jpg'
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='max-w-[1200px] mx-auto px-4 border-t-[1px] border-gray-100 pt-4 xl:pt-8'>
    <h1 className='text-[25px] xl:text-[32px] font-bold mb-5 xl:mb-6'>Bog'lanish</h1>
    
    <div className="bg-[#96B1C2] mb-3 w-full xl:w-[287px] rounded-xl p-4 xl:py-8 xl:pl-8 xl:pr-[13px]">
    <img src={QRmaxway} alt="qr code" className='w-[100px] hidden xl:block h-[100px] rounded-xl' />
    
    <p className='xl:pt-[18px] text-[17px] max-w-[220px] font-bold pb-4 text-white'>Telegramda sharh
    qoldiring yoki savol bering</p>
    
    <Link className='text-white flex items-center' to={'https://t.me/maxwaymasterfood_bot'}><FaTelegramPlane className='w-6 h-6' /> <span className='font-semibold'>@maxwaymasterfood_bot</span>
    </Link>
    </div>

    <div className="mb-[120px]">
      <h2 className='text-[18px] xl:text-[20px] font-bold'>Yagona aloqa markazi</h2>
      <Link className='text-[17px]' to={'tel:+998712005400'}>+998712005400</Link>
    </div>
    
    </div>
    )
  }
  
  export default ContactPage
  