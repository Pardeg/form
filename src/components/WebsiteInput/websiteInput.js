import React from 'react';
import {Input} from "antd";
import '../errors/errors.css';

const WebsiteInput = (props) => {
    const {value, touched, error, onChange} = props;
    return (
        <div>
            {touched && error ? <div className="redError">{error}</div> : null}
            <label htmlFor="website">
                <Input id="website"
                       value={value}
                       onChange={onChange}
                />
                Website
            </label>
        </div>
    )
}

export default WebsiteInput;