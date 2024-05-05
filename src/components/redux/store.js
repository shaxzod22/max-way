import { configureStore } from "@reduxjs/toolkit";
import foodsReducer from './slice/FoodSlice'
import cartReducer from './slice/CartSlice'

const store = configureStore({
    reducer:{
        foods:foodsReducer,
        cart:cartReducer,
    },
})

export default store