import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = 
{
    ids:[],
    songs: []
}

const songsSlice = createSlice({
    name: "songs",
    initialState: INITIAL__STATE,
    reducers:{
        addSongId(state, action) // action.payload contains the value of id directly
        {
            state.ids = [...state.ids, action.payload]
        },
        removeSongId(state, action)
        {
            const newIDs = state.ids.filter(item => item !== action.payload)
            console.log(newIDs)
            state.ids = newIDs;
        },
        replaceSongsIDs(state, action)
        {
            state.ids = action.payload
        },
        addSongs(state, action)
        {
            const newSongs = action.payload;
            state.songs = newSongs;
        }
    }
});


export const songsActions = songsSlice.actions;
export default songsSlice;