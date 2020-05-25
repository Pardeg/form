import React from "react";
import {Input} from "antd";
import './passwordFiled.css'
import '../errors/errors.css'

const PasswordInput = (props) => {
    const {value, onChange, error, touched} = props;
    return (
        <div className="passwordContainer">
            {touched && error ? <div className="redError">{error}</div> : null}
        <label htmlFor="password">
            <Input
                id="password"
                value={value}
                onChange={onChange}
            />
            Password*
        </label>
            </div>
    )
}

export default PasswordInput;