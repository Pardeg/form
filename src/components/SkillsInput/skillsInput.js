import React from "react";
import {Button, Input} from "antd";
import '../App/App.css';
import './skillsInput.css';

const SkillsInput = (props) => {
const {onClick, onChange, skills}=props;

  return (
      <div className="skillsInput-container">
          <div className="skillsInput-leftColumn">
      {skills.map((el, idx) => {
        return (
            <div key={idx} className="input">
                <label className="input-label"
                    htmlFor={idx}>
                    <Input
                        className="input-field"
                        onChange={onChange(idx)}
                        id={idx}
                    />
                    Skill
                </label>
            </div>
        )
    })}
          </div>
          <div>
              <Button
                  className="skillsButton"
                  onClick={onClick}
                  htmlType='button'>
                  + Add Skills Field
              </Button>
          </div>
      </div>
    )
}

export default SkillsInput;