import React from 'react';
import {Input} from "antd";
import '../errors/errors.css';
import '../App/App.css'

const ConfirmPassword = (props) => {
    const {onChange, value, error, touched} = props;
    return (
        <div className="input">
            {error && touched ? <div className="redError">{error}</div> : null}
            <label htmlFor="confirmPassword"
            className="input-label">
                <Input
                    className="input-field"
                    value={value}
                    id="confirmPassword"
                    onChange={onChange}
                />
                Confirm Password
            </label>
        </div>
    )
}

export default ConfirmPassword;