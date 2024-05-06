import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    cartTotalQuantity:0,
    cartTotalAmount:2000
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const itemIndex = state.cartItems.findIndex(item=>item.id == action.payload.id)
            
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity +=1
            }else{
                const tempFood = {...action.payload, cartQuantity:1}
                state.cartItems.push(tempFood)
            }
            
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        decreaseFromCart(state,action){
            const itemIndex = state.cartItems.findIndex((item)=>item.id == action.payload.id)
            
            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -=1
         
            }else if(state.cartItems[itemIndex].cartQuantity == 1){
                const nextCartItems = state.cartItems.filter((item)=>item.id !=action.payload.id)
                state.cartItems = nextCartItems
                toast.error(`${action.payload.name} savatdan o'chirildi!`,{position:'bottom-left'})
            }
            localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },
        getTotalamount(state,action){
            const {total ,quantity} = state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price,cartQuantity} = cartItem
                const itemTotal = price * cartQuantity
                cartTotal.total += itemTotal
        console.log(price);
                cartTotal.quantity += cartQuantity
                return cartTotal
            },{
                total:0,
                quantity:0
            })
            state.cartTotalAmount = total 
            state.cartTotalQuantity = quantity
        }
    }
})

export const {addToCart,decreaseFromCart,getTotalamount} = cartSlice.actions
export default cartSlice.reducer