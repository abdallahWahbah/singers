import React from 'react'
import CheckboxForm from './CheckboxForm'

const CheckboxCard = ({jsonObject, activeStep}) => 
{
    return (
        <React.Fragment>
            {jsonObject?.map(item => (
                <CheckboxForm 
                    label={item.label} 
                    activeStep={activeStep} 
                    id={item.id} 
                    key={item.id}
                    price={item.price}
                    item={item}
                />
            ))}
        </React.Fragment>
    )
}

export default CheckboxCard