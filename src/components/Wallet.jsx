import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Wallet = () => {
  const {cartTotalAmount} = useSelector(state=>state.cart)
  return (
    
    <Link className='flex items-center gap-2' to={'/cart'}>
    <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#F1EFF4] rounded-full">
    <PiShoppingCartSimpleFill className='w-[18px] h-[18px]' />
    </div>
    
    <p className='whitespace-nowrap'>{cartTotalAmount.toLocaleString()} so'm</p>
    </Link>
  
  )
}

export default Wallet
