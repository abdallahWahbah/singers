import React from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { UserJson } from './Form/FormSchema';
import FormInputCreator from './Form/FormInputCreator';
import InitialValuesValidators from './Form/InitialValuesValidators';
import { dataActions } from '../store/dataSlice';

const UserInformation = () => 
{
    const dispatch = useDispatch();

    const onSubmit =  values =>
    {
        dispatch(dataActions.saveUserData(values))
        dispatch(dataActions.showReceipt())
    }

    const {initialValues} = InitialValuesValidators("initialValues", UserJson);
    const {validators} = InitialValuesValidators("validators", UserJson);

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema: yup.object(validators)
    });

    const formContent = <FormInputCreator jsonObject={UserJson} formik={formik}/>;

    return (
        <form onSubmit={formik.handleSubmit}>
            {formContent}
        </form>
    )
}

export default UserInformation