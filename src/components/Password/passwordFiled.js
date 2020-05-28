import React from "react";
import {Input} from "antd";
import './passwordFiled.css'
import '../errors/errors.css'

const PasswordInput = (props) => {
    const {value, onChange, error, touched} = props;
    return (
        <div className="input">
            {touched && error ? <div className="redError">{error}</div> : null}
        <label htmlFor="password"
        className="input-label">
            <Input
                className="input-field"
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