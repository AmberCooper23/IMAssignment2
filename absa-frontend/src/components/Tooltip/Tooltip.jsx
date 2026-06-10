// components/Tooltip/Tooltip.jsx
import React, { useContext } from "react";
import LearningContext from "../../context/LearningContext";
import "./Tooltip.css";

function Tooltip({ term, variant = "warning" }) {
  const { glossary } = useContext(LearningContext);

  const cardClass =
    variant === "success"
      ? "BlueNudgeCard BlueNudgeSuccess"
      : "BlueNudgeCard BlueNudgeWarning";

  return (
    <span className="tooltipContainer">
      <span className="tooltipIcon">ℹ️</span>
      <div className={`${cardClass} tooltipCard`}>
        <div className="BlueNudgeTitle">{term}</div>
        <div className="BlueNudgeMessage">
          {glossary[term] || "Definition not found"}
        </div>
      </div>
    </span>
  );
}

export default Tooltip;
