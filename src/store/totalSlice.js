import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = 
{
    amount: 0,
    totalPrice: 0
}

const totalSlice = createSlice({
    name: "total",
    initialState: INITIAL__STATE,
    reducers:{
        increasePrice(state, action) // action.payload contains the value of price directly
        {
            state.totalPrice += action.payload
        },
        decreasePrice(state, action)
        {
            state.totalPrice -= action.payload            
        },
        increaseAmount(state, action) 
        {
            state.amount += action.payload
        },
        decreaseAmount(state, action)
        {
            state.amount -= action.payload            
        },
    }
});


export const totalActions = totalSlice.actions;
export default totalSlice;