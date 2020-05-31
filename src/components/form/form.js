import React from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {Button} from "antd";
import InputComponent from "../input-component/input-component";
import Checkbox from "../checkbox/checkbox";
import SkillsInput from "../skills-input/skills-input";
import './form.css';
import apiHelper from "../../formApi";

const MyForm = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            'confirm password': '',
            email: '',
            website: '',
            age: '',
            skills: [{value: ''}],
            acceptTerms: false,
            serverResponse: ''

        },
        validationSchema: Yup.object({
            name: Yup.string().length(50,'too long')
                .required('Required'),
            password: Yup.string()
                .matches(`.{8,40}`, {message: "from 8 to 40 symbols"})
                .matches(`(?=.*[A-Z])`, {message:'need one uppercase letter'})
                .matches(`(?=.*[0-9])`, {message: 'need one number'})
                .required("Required"),
            'confirm Password': Yup.string()
                .oneOf([Yup.ref('password')], "dont match")
                .required("Required"),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            website: Yup.string().url("Website address invalid"),
            age: Yup.number().min(18, "too young")
                .max(65, "too old")
                .required("Required"),
            acceptTerms: Yup.boolean(true).oneOf([true], "Required")
        }),
        onSubmit: ({name, password, email, website, age, skills}) => {
            const newSkills = skills.reduce((a, b) => {
                if (b.value.length > 0) {
                    a.push(b.value)
                    return a
                }
            }, []);
            const data = {name, password, email, website, age, skills: newSkills}
            const dataJson = JSON.stringify(data);
            apiHelper.request(dataJson, formik.setFieldValue);
        }
    });
    const skillsChange = (i) => (event) => {
        const {value} = event.target
        formik.setFieldValue(`skills[${i}].value`, value);
    }
    const skillsFieldAdd = () => {
        const {skills} = formik.values;
        const newSkills = [...skills, {value: ''}]
        formik.setFieldValue(`skills`, newSkills);
    }
    const inputFieldRender = () => {
        const nameOptions = ['name', 'password', 'confirm Password', 'email', 'website', 'age'];
        return (nameOptions.map(name => {
            if (name === 'email') {
                return (
                    <InputComponent key={name}
                        value={formik.values[name]}
                        onChange={formik.handleChange}
                        error={formik.errors[name]}
                        touched={formik.touched[name]}
                        response={formik.values.serverResponse}
                        name={name}
                    />
                )
            }
            return <InputComponent
                key={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={formik.errors[name]}
                touched={formik.touched[name]}
                name={name}
            />
        }));
    }
    const formRender = () => {
        return (
            <form onSubmit={formik.handleSubmit}
                  className="form">
                {inputFieldRender()}
                <SkillsInput
                    onClick={skillsFieldAdd}
                    onChange={skillsChange}
                    skills={formik.values.skills}
                />
                <div>*Minimum eight characters, at least one uppercase letter and one number</div>
                <Checkbox
                    error={formik.errors.acceptTerms}
                    touched={formik.touched.acceptTerms}
                    checked={formik.values.acceptTerms}
                    onChange={formik.handleChange}
                />
                <div className="submitButton-container">
                    <Button className="submitButton"
                            htmlType='submit'
                    >Submit
                    </Button>
                </div>
            </form>
        )
    }
    return (
        formik.values.serverResponse === 'ok' ?
            <div className="succesfull">Registration Successfull</div> : formRender()
    )
}

export default MyForm;