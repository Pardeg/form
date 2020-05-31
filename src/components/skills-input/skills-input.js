import React from "react";
import {Button, Input} from "antd";
import '../app/app.css';
import './skills-input.css';

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
                    skill
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