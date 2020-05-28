import React from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {Button} from "antd";
import Checkbox from "../Checkbox/checkbox";
import NameInput from "../NameField/nameField";
import PasswordInput from "../Password/passwordFiled";
import ConfirmPassword from "../ConfirmPassword/confirmPassword";
import EmailInput from "../email/emailInput";
import WebsiteInput from "../WebsiteInput/websiteInput";
import AgeInput from "../AgeInput/ageInput";
import SkillsInput from "../SkillsInput/skillsInput";
import './form.css';
import '../App/App.css';

const MyForm = (props) => {
    const {request} = props;
    const formik = useFormik({
        initialValues: {
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            website: '',
            age: '',
            skills: [{value: ''}],
            acceptTerms: false,
            serverResponse: ''

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
            request(dataJson, formik.setFieldValue);
            console.log(formik.values)

        }
    });
    const skillsChange = (i) => (event) => {
        const {value} = event.target
        const {skills} = formik.values;
        formik.setFieldValue(`skills[${i}].value`, value);
    }
    const skillsFieldAdd = () => {
        const {skills} = formik.values;
        const newSkills = [...skills, {value: ''}]
        formik.setFieldValue(`skills`, newSkills);
    }
    const formRender = () => {
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
                    response={formik.values.serverResponse}
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
        formik.values.serverResponse === 'ok' ? <div className="succesfull">Registration Successfull</div> : formRender()
    )
}

export default MyForm;