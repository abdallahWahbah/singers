import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import Totals from './components/Totals'
import { useStyles } from './styling/style'
import StepperSingers from './Inputs/StepperSingers'
import Receipt from './components/Receipt'

const App = () => 
{
  const classes = useStyles()
  const showReceipt = useSelector(state => state.user.receipt)

    return (
        <Grid container spacing={2} className={classes.appGrid}>

          {!showReceipt && (
            <React.Fragment>
              <Grid item xs={8} className={classes.stepper}>
                <StepperSingers  />
              </Grid>

              <Grid item xs={4}>
                <Totals />
              </Grid>
            </React.Fragment>
          )}
          {showReceipt && (
            <Receipt />
          )}
        </Grid>  
    )
}

export default App