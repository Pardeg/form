import React from 'react';
import {Input} from "antd";
import '../errors/errors.css';
import '../App/App.css'

const AgeInput = (props) => {
    const {value, touched, error, onChange} = props;
    return (
        <div className="input">
            <label htmlFor="age"
            className="input-label">
                {touched && error ? <div className="redError">{error}</div> : null}
                <Input id="age"
                       className="input-field"
                       value={value}
                       onChange={onChange}
                />
                Age
            </label>
        </div>
    )
}

export default AgeInput;