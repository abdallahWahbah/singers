import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = 
{
    ids:[]
}

const singersSlice = createSlice({
    name: "singers",
    initialState: INITIAL__STATE,
    reducers:{
        addSingerId(state, action) // action.payload contains the value of id directly
        {
            state.ids = [...state.ids, action.payload]
        },
        removeSingerId(state, action)
        {
            const newIDs = state.ids.filter(item => item !== action.payload)
            state.ids = newIDs;
        }
    }
});


export const singersActions = singersSlice.actions;
export default singersSlice;