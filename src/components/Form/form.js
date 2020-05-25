import React from "react";
import {useFormik, FieldArray, Field} from "formik";
import * as Yup from 'yup';
import NameInput from "../NameField/nameField";
import PasswordInput from "../Password/passwordFiled";
import ConfirmPassword from "../ConfirmPassword/confirmPassword";
import EmailInput from "../email/emailInput";
import WebsiteInput from "../WebsiteInput/websiteInput";
import AgeInput from "../AgeInput/ageInput";
import './form.css';
import {Input} from "antd";

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            website:'',
            age:0,
            skills:['',]

        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            password: Yup.string()
                .matches(`^(?=.*[A-Z])(?=.*[0-9])(.*[a-zA-Z]).{8,40}$`, {message: "Invalid look to *"})
                .required("Required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], "dont match")
                .required("Required"),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            website: Yup.string().url("Website address invalid"),
            age: Yup.number().min(18,"too young")
                .max(65,"too old")
                .required("Required")
        }),
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}
              className="form">
            <NameInput
                onChange={formik.handleChange}
                value={formik.values.name}
                touched={formik.touched.name}
                error={formik.errors.name}
            />
            <PasswordInput
                value={formik.values.password}
                onChange={formik.handleChange}
                touched={formik.touched.password}
                error={formik.errors.password}
            />
            <ConfirmPassword
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.errors.confirmPassword}
                touched={formik.touched.confirmPassword}
            />
            <EmailInput
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                touched={formik.touched.email}
            />
            <WebsiteInput
                value={formik.values.website}
                onChange={formik.handleChange}
                error={formik.errors.website}
                touched={formik.touched.website}
            />
            <AgeInput
                value={formik.values.age}
                onChange={formik.handleChange}
                error={formik.errors.age}
                touched={formik.touched.age}
            />
            {formik.values.skills.map((skill, index)=>(
                <div key={index}>
                    <Input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.skills[`${index}`]}
                    id={index}
                    name={index}
                    />
                </div>
            ))}
            <button
                type="submit"
            >button
            </button>
        </form>
    )
}

export default MyForm;