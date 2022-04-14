import { Grid } from '@mui/material'
import React from 'react'

import Totals from './components/Totals'
import { useStyles } from './styling/style'
import StepperSingers from './Inputs/StepperSingers'

const App = () => 
{
  const classes = useStyles()

    return (
      <Grid container spacing={2} className={classes.appGrid}>

        <Grid item xs={8} className={classes.stepper}>
          <StepperSingers  />
        </Grid>

        <Grid item xs={4}>
          <Totals />
        </Grid>

      </Grid>  
    )
}

export default App