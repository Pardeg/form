import React from "react";
import styled from "styled-components";
import notChecked from '../../images/Form.svg';
import checkedImage from '../../images/Checkbox.svg';
import '../App/App.css';
import './checkbox.css';

const Checkbox = (props) => {
    const {error, touched, checked, onChange} = props;
    return (
        <div className="input">
            {touched && error ? <div className="redError">{error}</div> : null}
            <Label checked={checked}
                htmlFor="acceptTerms"
                   className="checkbox-label">
                Accept Terms
            </Label>
            <input type="checkbox"
                   className="input-checkbox"
                   id="acceptTerms"
                   onChange={onChange}
                   checked={checked}
            />
        </div>
    )
}

export default Checkbox;

const Label = styled.label`
&:before{
content: '';
display:inline-block;
position: relative;
top: 3px;
width: 20px;
height: 20px;
margin-right: 5px;
background-image: ${props=>props.checked?`url(${checkedImage})`:`url(${notChecked})`};
}
`