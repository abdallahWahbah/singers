import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = 
{
    ids:[],
    albums: []
}

const albumsSlice = createSlice({
    name: "albums",
    initialState: INITIAL__STATE,
    reducers:{
        addAlbumId(state, action) // action.payload contains the value of id directly
        {
            state.ids = [...state.ids, action.payload]
        },
        removeAlbumId(state, action)
        {
            const newIDs = state.ids.filter(item => item !== action.payload)
            state.ids = newIDs;
        },
        replaceAlbums(state, action)
        {
            const newAlbums =  action.payload;
            state.albums = newAlbums;
        }
    }
});


export const albumsActions = albumsSlice.actions;
export default albumsSlice;