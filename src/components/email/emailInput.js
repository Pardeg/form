import React from "react";
import {Input} from "antd";
import '../errors/errors.css'
import '../App/App.css'

const EmailInput = (props) => {
    const {touched, value, onChange, error, response} = props;
    return (
        <div className="input">
            {response==='err'?<div className="redError">Email already exist, enter another one</div>:null }
            {touched && error?<div className="redError">Invalid email address</div>:null}
            <label htmlFor="email"
            className="input-label">
                <Input id="email"
                       className="input-field"
                       onChange={onChange}
                       value={value}
                />
                Email
            </label>
        </div>
    )
}

export default EmailInput;