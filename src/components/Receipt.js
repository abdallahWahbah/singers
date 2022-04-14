import React, {useState} from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemText, Card, CardContent } from '@mui/material';

import { useSelector } from 'react-redux'
import { useStyles } from '../styling/style';

const Receipt = (props) => 
{
    const songs = useSelector(state => state.songs.selectedSongs);
    const userData = useSelector(state => state.user.data);
    const totalPrice = useSelector(state => state.total.totalPrice);
    const amount = useSelector(state => state.total.amount);

    const classes = useStyles();

    const [open, setOpen] = useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    
  
    return (
        <Card style={{width: "50%", margin: "20px auto"}}>
            <CardContent>
                {Object.entries(userData).map((item) => (
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>{item[0] === "radio-buttons-group" ? "gender" : item[0]}</p>
                        <p>{item[1]}</p>
                    </div>
                ))}
                <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>Total Price</p>
                        <p>{totalPrice}</p>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                        <p>Number of songs</p>
                        <p>{amount}</p>
                </div>
                <List
                    sx={{ width: '30%', maxWidth: 360, bgcolor: '#e0e0e0' }}
                    component="nav"
                >
                    <ListItemButton onClick={handleClick}>
                        <ListItemText primary={"Your Songs"} />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{pl: 4}}>
                            {songs?.map(item => (
                                <ListItemText primary={item.label} key={item.id} />
                            ))}
                        </List>
                    </Collapse>
                </List>
            </CardContent>
        </Card>
    )
}

export default Receipt