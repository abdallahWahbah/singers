import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = 
{
    data: {},
    showReceipt: false
}

const dataSlice = createSlice({
    name: "data",
    initialState: INITIAL__STATE,
    reducers:{
        saveUserData(state, action)
        {
            state.data = {...action.payload}
        },
        showReceipt(state)
        {
            state.showReceipt = true
        }
    }
});


export const dataActions = dataSlice.actions;
export default dataSlice;