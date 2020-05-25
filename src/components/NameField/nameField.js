import React from "react";
import {Input} from "antd";
import '../errors/errors.css';

const NameInput = (props) => {
    const {onChange, value, touched, error} = props;

    return (
        <label htmlFor="name">
            {touched && error ? <div className="redError">{error}</div> : null}
            <Input
                id="name"
                maxLength={50}
                value={value}
                onChange={onChange}
            />
            Name
        </label>
    )
}

export default NameInput;