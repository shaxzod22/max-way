import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    status:null
}

const foodsSlice = createSlice({
    name:"foods",
    initialState,
    reducers:{}
})

export default foodsSlice.reducer