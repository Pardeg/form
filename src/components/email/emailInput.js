import React from "react";
import {Input} from "antd";
import '../errors/errors.css'

const EmailInput = (props) => {
    const {touched, value, onChange, error} = props;
    return (
        <div>
            {touched && error?<div className="redError">Invalid email address</div>:null}
            <label htmlFor="email">
                <Input id="email"
                       onChange={onChange}
                       value={value}
                />
                Email
            </label>
        </div>
    )
}

export default EmailInput;