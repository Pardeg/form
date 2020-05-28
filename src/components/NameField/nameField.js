import React from "react";
import {Input} from "antd";
import '../errors/errors.css';
import '../App/App.css'

const NameInput = (props) => {
    const {onChange, value, touched, error} = props;

    return (
        <div className="input">
        <label htmlFor="name"
        className="input-label">
            {touched && error ? <div className="redError">{error}</div> : null}
            <Input
                className="input-field"
                id="name"
                maxLength={50}
                value={value}
                onChange={onChange}
            />
            Name
        </label>
        </div>
    )
}

export default NameInput;