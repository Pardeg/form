import React from 'react';
import {Input} from "antd";
import '../errors/errors.css';
import '../App/App.css'
const WebsiteInput = (props) => {
    const {value, touched, error, onChange} = props;
    return (
        <div className="input">
            {touched && error ? <div className="redError">{error}</div> : null}
            <label htmlFor="website"
            className="input-label">
                <Input id="website"
                       className="input-field"
                       value={value}
                       onChange={onChange}
                />
                Website
            </label>
        </div>
    )
}

export default WebsiteInput;