import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from '../components/CartItems';
import { getTotalamount } from '../components/redux/slice/CartSlice';


const CartPage = () => {
  const cart = useSelector(state=>state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTotalamount())
  },[cart,dispatch])
  
  const cartItems = cart.cart
  
  return (
    <div className='pt-6  border-t-2 border-gray-100'>
    <CartItems/>
    </div>
    )
  }
  
  export default CartPage
  