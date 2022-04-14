import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Box, Button, Step, StepLabel, Stepper, Typography} from '@mui/material';

import { singersData } from './Schema';
import { albumsActions } from '../store/albumsSlice';
import { songsActions } from '../store/songsSlice';
import CheckboxCard from './CheckboxCard';
import UserInformation from '../components/UserInformation';

const StepperSingers = () => 
{
    const [activeStep, setActiveStep] = useState(0);
    const singersIDs = useSelector(state => state.singers.ids)
    const albumsIDs = useSelector(state => state.albums.ids)
    const songsIDs = useSelector(state => state.songs.ids)
    const albums = useSelector(state => state.albums.albums)
    const songs = useSelector(state => state.songs.songs)
    const dispatch = useDispatch();

    const steps = ['Select Singers', 'Select Albums', 'Select Songs', "User Data"];
    const hints = ["Select at least one Singer", "Select at least one Album", "Select at least a Song", "Enter your information"]

    // get all albums for rendering
    useEffect(() =>
    {
        let albums = [];
        singersData.forEach(singer =>
        {
            singersIDs.forEach(singerID =>
            {
                if(singer.id === singerID)
                {
                    albums = [...albums, ...singer.albums]
                }
            })
        })
        dispatch(albumsActions.replaceAlbums(albums))
    }, [dispatch, singersIDs])

    // get all songs for rendering
    useEffect(() =>
    {
        let songs = [];
        albums.forEach(singer =>
        {
            albumsIDs.forEach(singerID =>
            {
                if(singer.id === singerID)
                {
                    songs = [...songs, ...singer.songs]
                }
            })
        })
        dispatch(songsActions.addSongs(songs))
    }, [dispatch, albums, albumsIDs])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    
    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    {/* Step {activeStep + 1} */}
                                    {hints[activeStep]}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', py: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    {/* <Box sx={{ flex: '1 1 auto' }} /> */}

                                    {/* <Button 
                                        onClick={handleNext} 
                                        disabled={(activeStep === 0 && singersIDs.length === 0) || 
                                                    (activeStep === 1 && albumsIDs.length === 0) ||
                                                    (activeStep === 2 && songsIDs.length === 0)}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button> */}
                                    {(activeStep < steps.length - 1) && (
                                        <Button 
                                            onClick={handleNext} 
                                            disabled={(activeStep === 0 && singersIDs.length === 0) || 
                                                        (activeStep === 1 && albumsIDs.length === 0) ||
                                                        (activeStep === 2 && songsIDs.length === 0)}
                                        >
                                            Next
                                        </Button>
                                    )}
                                </Box>
                            </React.Fragment>
                    </React.Fragment>
                )}
            </Box>
            {activeStep === 0 && (
                <CheckboxCard jsonObject={singersData} activeStep={activeStep}/>
            )}
            {activeStep === 1 && (
                <CheckboxCard jsonObject={albums} activeStep={activeStep}/>
            )}
            {activeStep === 2 && (
                <CheckboxCard jsonObject={songs} activeStep={activeStep}/>
            )}
            {activeStep === 3 && (
                <>
                    <UserInformation />
                </>
            )}
        </React.Fragment>
    )
}

export default StepperSingers