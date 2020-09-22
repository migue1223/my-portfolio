import React from "react";
import './styles.css';

const SkillBar = ({ id, title, percent }) => {
    return (
        <div className="skillBar">
            <div className="skillBar-heading">
                <p key={id} className="skillBar__title">{title}</p>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-bar__inner"
                    style={{
                        width: `${percent}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;