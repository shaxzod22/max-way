import React, { useContext } from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Context } from '../App';
import { addToCart, decreaseFromCart } from './redux/slice/CartSlice';
import EmptyCart from './../assets/img/emptyCart.webp'

const CartItems = () => {
    const {hasIntroModal,setHasIntroModal} = useContext(Context)
    const cart = useSelector(state=>state.cart)
    const cartItems = cart.cartItems
    const cartTotalAmount = cart.cartTotalAmount
    const deliveryCost = 0
    const dispatch = useDispatch()
    const handleAddToCart = (food)=>{
        dispatch(addToCart(food))
    }

    const handleDecreaseCart = (food)=>{
    dispatch(decreaseFromCart(food))
    }
    
    const renderItems = (itemsArr)=>{
      return (itemsArr.map((item,index)=>(
            <li key={index} className='w-full rounded-lg md:flex-row flex-col flex gap-4 md:gap-0 justify-between items-center py-6 px-5 border-[1px] border-gray-100'>
            <div className="flex flex-col sm:flex-row w-full md:w-auto md:items-center gap-3">
            <img src={item?.imgUrl} alt="food" className='w-[78px] h-[78px] rounded-xl' />
            <div className="flex flex-col max-w-[350px]">
            <h2 className='text-[18px] font-semibold'>{item?.name}</h2>
            <p className='text-[#48535B] '>{item?.description}</p>
            </div>
            </div>
            
            <div className="flex w-full justify-between md:justify-start md:w-auto items-center gap-2">
            <div className="flex items-center border-[1px] border-[#51267D] rounded-3xl gap-3 text-[17px] font-semibold">
            <button onClick={()=>handleDecreaseCart(item)} className='py-[4px] pl-[18px] '><FaMinus /></button>
            <span className='py-[4px]'>{item?.cartQuantity}</span>
            <button onClick={()=>handleAddToCart(item)} className='py-[4px] pr-[18px]'><FaPlus /></button>
            </div>
            <div className="w-[132px] text-end font-semibold text-[18px]">{item?.price} so'm</div>
            </div>
            </li>
            )))
   
    }

    return (
        <div className='px-4 max-w-[1200px] mx-auto'>
        <h1 className='text-[25px] xl:text-[32px] font-bold'>Savatcha</h1>
        <div className="flex xl:flex-row flex-col items-start w-full gap-4 xl:gap-0 justify-between pt-5 xl:pt-8">
        {cartItems.length? <ul className='xl:max-w-[750px] flex flex-col gap-3 w-full border-collapse border-[1px] border-gray-100 rounded-lg'>
      {renderItems(cartItems)}
        </ul>: <div className='text-[20px] md:text-[24px]'>
            <img className='w-[200px] h-[150px] md:w-[350px] md:h-[250px]' src={EmptyCart} alt="empty cart" />
            <h2 className='font-semibold'>Savat hozircha bo'sh!</h2>
        <Link className='text-[18px] italic text-blue-300 underline' to={'/'}>Menyuga o'tish</Link>
            </div>}
        
        <div className="py-6 sticky top-[10px] border-[1px] border-gray-100 rounded-lg px-[18px] w-full xl:max-w-[363px]">
        <div className="w-full">
        <h3 className='text-[20px] font-bold'>Umumiy</h3>
        <div className="w-full sm:text-[18px]">
        <div className="w-full flex  my-4 justify-between">
        <h4 className=''>Mahsulotlar</h4>
        <p className='font-semibold'>{cartTotalAmount.toLocaleString()} so'm</p>
        </div>
        <div className="w-full my-4 flex justify-between">
        <h4>Yetkazib berish</h4>
        <p className='font-semibold'>{deliveryCost.toLocaleString()} so'm</p>
        </div>
        
        </div>
        
        <div className="w-full sm:text-[18px] border-t-[1px] border-gray-200 pt-4 my-4 flex justify-between">
        <h4>To'lash uchun</h4>
        <p className='font-semibold'>{(cartTotalAmount + deliveryCost).toLocaleString()} so'm</p>
        </div>
        <button onClick={()=>{
            setHasIntroModal(!hasIntroModal)
            document.body.style.overflow ='hidden'
            }} className='bg-[#51267D] py-3 px-4 w-full rounded-3xl text-white font-semibold'>To'lov sahifasiga o'tish</button>
        </div>
        </div>
        </div>
        </div>
        )
    }
    
    export default CartItems
    