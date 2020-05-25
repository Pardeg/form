import React from 'react';
import {Input} from "antd";
import '../errors/errors.css';

const ConfirmPassword = (props) => {
    const {onChange, value, error, touched} = props;
    return (
        <div>
            {error && touched ? <div className="redError">{error}</div> : null}
            <label htmlFor="confirmPassword">
                <Input
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