import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = 
{
    ids:[],
    songs: [],
    selectedSongs: []
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
            state.ids = newIDs;
        },
        replaceSongsIDs(state, action)
        {
            state.ids = action.payload
        },
        addSongs(state, action) // all songs including non-selected songs (for rendering the wizard)
        {
            const newSongs = action.payload;
            state.songs = newSongs;
        },
        addSelectedSong(state, action)
        {
            state.selectedSongs = [...state.selectedSongs, action.payload]
        },
        removeSelectedSong(state, action)
        {
            state.selectedSongs = state.selectedSongs.filter(item => item.id !== action.payload.id)
        }
    }
});


export const songsActions = songsSlice.actions;
export default songsSlice;