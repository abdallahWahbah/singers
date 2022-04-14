import React from 'react';

import {TextField, Button, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel} from '@mui/material';
import { useStyles } from '../../styling/style';

const FormInputCreator = ({jsonObject, formik}) => {

    const classes = useStyles();
    const formContent = jsonObject.map(element =>
    {
        if( element.name === "name" ||
            element.name === "email" || 
            element.name === "phone")            
        {
            return (
                <React.Fragment key={element.name}>
                    <TextField 
                        fullWidth={element.fullWidth ? true : false}
                        label={element.label}
                        id={element.id}
                        multiline={element.multiline ? true : false}
                        rows={element.rows ? element.rows : 1}
                        type={element.type ? element.type : "text"} 
                        sx={element.sx ? element.sx : null}
                        {...formik.getFieldProps(element.name)}/>

                        {formik.touched[element.name] && formik.errors[element.name] ? <div className={classes.errorMessage}>{formik.errors[element.name]}</div> : null}
                </React.Fragment>
            )
        }
        if(element.name === "radio-buttons-group") // for gender
        {
            return (
                <FormControl component="fieldset" key={element.name}>
                    <FormLabel component="legend">{element.label}</FormLabel>
                    <RadioGroup
                        aria-label={element.ariaLabel}
                        // defaultValue={element.defaultValue ? element.defaultValue : null}
                        {...formik.getFieldProps(element.name)}
                    >
                        {element.options.map(option =>
                        (
                            <FormControlLabel value={option.value} control={<Radio />} label={option.label} key={option.value}/>
                        ))}
                    </RadioGroup>
                    {formik.touched[element.name] && formik.errors[element.name]? <div style={{color:"red", marginBottom: "20px"}}>{formik.errors[element.name]}</div> : null}
                
                </FormControl>
            )
        }
        if(element.name === "buttonWide")
        {
            return (
                <div style={{textAlign: "center"}} key={element.name}>
                    <Button 
                        key={element.name}
                        type="submit" 
                        variant="contained" 
                        fullWidth={element.fullWidth ? true : false}
                        sx={element.sx}>{element.title}</Button>
                </div>
            )
        }
        return null;
    });




    return (
        <React.Fragment>
            {formContent}
        </React.Fragment>
    )
}

export default FormInputCreator;