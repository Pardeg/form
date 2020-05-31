import React from "react";
import './input-component.css';
import '../../styles/errors.css';
import {Input} from "antd";

const InputComponent = (props)=>{
    const {touched, value, onChange, error, response=null, name} = props;
    console.log(touched,value,error,name)
    return (
        <div className="input">
            {response==='err'?<div className="redError">Email already exist, enter another one</div>:null }
            {touched && error?<div className="redError">{error}</div>:null}
            <div>
                <Input id="email"
                       className="input-field"
                       onChange={onChange}
                       value={value}
                       name={name}
                />
                <label>
                    {name}
                </label>
            </div>
        </div>
    )
}

export default InputComponent;