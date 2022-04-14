import * as yup from 'yup';

export const UserJson = 
[
    {
        name: "name",
        type: "text",
        fullWidth: "fullWidth",
        label: "Full Name",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        initialValue: "",
        validator: yup.string().min(7).required("Name can't be empty")
    },
    {
        type: "email",
        fullWidth: "fullWidth",
        label: "Email",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "email",
        initialValue: "",
        validator: yup.string().email("email must be valid").required("Email can't be empty")
    },
    {
        type: "number",
        fullWidth: "fullWidth",
        label: "Phone Number",
        id: "fullWidth",
        sx: {marginBottom: "20px"},
        name: "phone",
        initialValue: "",
        validator: yup.number().positive()
                        .min(1000000000, "Must be 10 digits (exclude 0 at first digit)")
                        .max(9999999999, "Must be 10 digits (exclude 0 at first digit)")
                        .required("Phone Number can't be empty")
    },
    {
        type: "radio", // gender
        label: "Gander",
        ariaLabel: "gender",
        defaultValue: "male",
        name: "radio-buttons-group",
        options:
        [
            {
                value: "male",
                label: "Male"
            },
            {
                value: "female",
                label: "Female"
            },
        ]
    },
    {
        type: "button",
        fullWidth: "fullWidth",
        sx: {width: "100%", textAlign: "center !important", marginBottom: "20px"},
        title: "Register",
        name: "buttonWide"
    }
]