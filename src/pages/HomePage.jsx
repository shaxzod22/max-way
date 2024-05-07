import React, { useContext, useEffect, useState } from 'react'
import Adcaroucel from '../components/Adcaroucel'
import Wallet from '../components/Wallet'
import FoodData from './../components/data/foods.json'
import { BsFillPersonFill } from "react-icons/bs";
import { Context } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { addToCart,decreaseFromCart,getTotalamount } from '../components/redux/slice/CartSlice';

const HomePage = () => {
  const dispatch = useDispatch()
  const [hasNavFood,setHasNavFood] = useState(false)
  const [hasIntroModal,setHasIntroModal] = useContext(Context)
  const cart = useSelector(state=>state.cart)
  const cartItems = cart.cartItems
 
  useEffect(()=>{
    dispatch(getTotalamount())
  },[cart,dispatch])

  const handleAddToCart =(product)=>{
    dispatch(addToCart(product))
  }
  const handleDecreaseCart = (food)=>{
    dispatch(decreaseFromCart(food))
    }
  
  const typeArr = []
  FoodData.map((food)=>{
    if(!typeArr.includes(food.type)){
      typeArr.push(food.type)
    }
  })
  
  window.addEventListener('scroll',()=>{
    if(window.scrollY>630){
      setHasNavFood(true)
    }else{
      setHasNavFood(false)
    }
    
  })
  
  const renderFood = (foodArr,type)=>{
    const findQuantity = (item)=>{
      const itemIndex = cartItems.findIndex((product)=>product.id == item.id )

      if(itemIndex>=0){
      return cartItems[itemIndex].cartQuantity
      }else{
      return false
      }

    }
    return(
      <>
      <div id={type} className={` ${hasNavFood?'pt-16':'pt-8'} max-w-[1248px] mb-3 px-6 mx-auto`}>
      <h2 className={`text-[28px] font-bold mb-4`}>{type}</h2>
      <ul className='flex gap-4 flex-wrap justify-center md:justify-start'>
      {foodArr && foodArr.filter((food=>food?.type ==type)).map((item,index)=>(
        <li className='max-w-[240px] sm:max-w-[250px] md:max-w-[260px] w-full xl:max-w-[288px]  flex flex-col ' key={index}>
        <img src={item.imgUrl} className='w-full rounded-t-xl h-[200px] md:h-[220px]' alt="food" />
        <div className="px-4 flex-grow flex flex-col justify-end rounded-b-xl pt-3 pb-4 border-[1px] border-gray-100">
        <h3 className='text-[19px] mb-[7px] font-semibold'>{item?.name}</h3>
        {item?.description && <p className='text-[#48535B] text-[14px]'>{item?.description.slice(0,52)}...</p>}
        <div className="flex xl:flex-row flex-col w-full mt-2 justify-between xl:items-center">
        <p className='text-[19px] mb-3 xl:mb-0 font-bold'>{item?.price} <span className='text-[14px] font-normal'>so'm</span></p>
       {findQuantity(item)?<div className="flex justify-evenly xl:justify-start items-center border-[1px] border-[#51267D] rounded-3xl gap-3 text-[17px] font-semibold">
        <button onClick={()=>handleDecreaseCart(item)} className='py-[7px] pl-[18px] '><FaMinus /></button>
        <span className='py-[7px]'>{findQuantity(item)}</span>
        <button onClick={()=>handleAddToCart(item)} className='py-[7px] pr-[18px]'><FaPlus /></button>
        </div>: <button onClick={()=>handleAddToCart(item)} className='bg-[#51267D] font-semibold tracking-[0.5px] py-[10px] px-6 text-[14px] text-white rounded-3xl'>Qo'shish</button>}
        </div>
        </div>
        </li>
        ))}
        </ul>
        </div>
        </>
        )
      }
      
      return (
        <div>
        <Adcaroucel />
        
        <div className={`${hasNavFood?'w-full shadow-md sticky top-0 bg-white':''} `}>
        <div className="max-w-[1248px] gap-4 flex items-center px-6 mx-auto mt-4 lg:mt-8">
        <ul className='flex w-[1130px] py-2 items-center gap-3 overflow-x-auto scroll_hidden'>
        {typeArr.map((type,index)=>(
          <li className={`px-4 py-2 rounded-xl active:bg-transparent hover:bg-[#F1EFF4] cursor-pointer text-[18px] whitespace-nowrap`} onClick={()=>{
            const typeHeading = document.getElementById(type)
            typeHeading.scrollIntoView({behavior:'smooth'})
          }} key={index}>
          {type}
          </li>
          ))}
          </ul>
          
          <div className={`flex items-center gap-[12px] ${hasNavFood?'block':'hidden'}`}>
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
          
          {renderFood(FoodData,'🍟🍔🥤Maxi BOX')}
          {renderFood(FoodData,'🥪Klab-Sendvich')}
          {renderFood(FoodData,'🌯Lavash')}
          {renderFood(FoodData,'🌮Shaurma')}
          {renderFood(FoodData,'🥮Panini')}
          {renderFood(FoodData,'🍚Tamaddilar')}
          {renderFood(FoodData,'🥤Ichimliklar')}
          {renderFood(FoodData,'🥫Souslar')}
          
          </div>
          )
        }
        
        export default HomePage
        