import {configureStore} from '@reduxjs/toolkit';

import singersSlice from './singersSlice';
import albumsSlice from './albumsSlice';
import songsSlice from './songsSlice';
import totalSlice from './totalSlice';
import dataSlice from './dataSlice';

const store = configureStore({
    reducer: {
        singers: singersSlice.reducer, 
        albums: albumsSlice.reducer, 
        songs: songsSlice.reducer,
        total: totalSlice.reducer,
        user: dataSlice.reducer
    }
})

export default store;