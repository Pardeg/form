import React from 'react';
import {Input} from "antd";
import '../errors/errors.css';

const AgeInput = (props) => {
    const {value, touched, error, onChange} = props;
    return (
        <div>
            {touched && error ? <div className="redError">{error}</div> : null}
            <label htmlFor="age">
                <Input id="age"
                       value={value}
                       onChange={onChange}

                />
                Age
            </label>
        </div>
    )
}

export default AgeInput;