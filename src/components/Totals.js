import { Card, CardContent, Typography } from '@mui/material';
import React from 'react'

import { useSelector } from 'react-redux'

const Totals = () => 
{
    const totalPrice = useSelector(state => state.total.totalPrice);
    const totalAmount = useSelector(state => state.total.amount);

    const content = ({title, value}) =>
    {
        return (
            <React.Fragment>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {value}
                    </Typography>
            </React.Fragment>
        )
    }

    return (
        <Card>
            <CardContent>
                {content({title: "Total Price", value: totalPrice})}
                {content({title: "Number of songs", value: totalAmount})}
            </CardContent>
        </Card>
    )
}

export default Totals