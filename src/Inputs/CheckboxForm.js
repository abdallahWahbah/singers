import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {FormControlLabel, FormGroup, Checkbox} from '@mui/material';

import { singersActions } from '../store/singersSlice';
import { albumsActions } from '../store/albumsSlice';
import { songsActions } from '../store/songsSlice';
import { totalActions } from '../store/totalSlice';
import { singersData } from './Schema';

const CheckboxForm = (props) => 
{
    const dispatch = useDispatch();
    const singersIDs = useSelector(state => state.singers.ids);
    const albumsIDs = useSelector(state => state.albums.ids);
    const songsIDs = useSelector(state => state.songs.ids);
    const albums = useSelector(state => state.albums.albums);
    const selectedSongs = useSelector(state => state.songs.selectedSongs);
    
    const handleClick = (event) =>
    {

        if(event.target.checked === true)
        {
            if(props.activeStep === 0) // singers step
            {
                dispatch(singersActions.addSingerId(props.id))
            }
            else if (props.activeStep === 1) // albums step
            {
                dispatch(albumsActions.addAlbumId(props.id))
            }
            else if (props.activeStep === 2) // songs step
            {
                dispatch(songsActions.addSongId(props.id))
                dispatch(songsActions.addSelectedSong(props.item))

                dispatch(totalActions.increasePrice(props.price))
                dispatch(totalActions.increaseAmount(1))
            }
        }
        else
        {
            if(props.activeStep === 0) 
            {
                dispatch(singersActions.removeSingerId(props.id))

                const singerAlbums = singersData.find(item => item.id === props.id).albums

                singerAlbums.forEach(album => 
                {
                    dispatch(albumsActions.removeAlbumId(album.id))

                    removeAlbumSongs(album)
                })
            }
            else if (props.activeStep === 1) 
            {
                dispatch(albumsActions.removeAlbumId(props.id))

                const album = albums.find(item => item.id === props.id);

                removeAlbumSongs(album)
            }
            else if (props.activeStep === 2)
            {
                dispatch(songsActions.removeSongId(props.id))
                dispatch(songsActions.removeSelectedSong(props.item))

                // (decrease song price and amount)
                removeSongUI(props.price)
            }
        }
    }

    const removeAlbumSongs = (album) =>
    {
        // (decrease song price and amount)
        album.songs.forEach(song => 
        {
            if(songsIDs.includes(song.id)) removeSongUI(song.price, 1)
            dispatch(songsActions.removeSelectedSong(song))
        })

        // get songs ids to be removed
        const removeSongsIDs = album.songs.map(song => song.id)
        removeSongsIDs.forEach(id => dispatch(songsActions.removeSongId(id)))
    }

    const removeSongUI = (price, amount = 1) =>
    {
        dispatch(totalActions.decreasePrice(price))
        dispatch(totalActions.decreaseAmount(amount))
    }

    const isChecked = () => props.activeStep === 0 ? singersIDs.includes(props.id) : 
                            props.activeStep === 1 ? albumsIDs.includes(props.id) :
                                                     songsIDs.includes(props.id)

    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox 
                        onClick={handleClick} 
                        checked={isChecked()}    
                    />} 
                    label={props.label}
                />
            </FormGroup>
        </>
    )
}

export default CheckboxForm