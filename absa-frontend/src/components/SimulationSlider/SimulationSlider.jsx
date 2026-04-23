import React from "react";
import "./SimulationSlider.css";

function SimulationSlider({ label, value, min, max, step, onChange, formatValue }) {
    const fillPercent = ((value - min) / (max - min)) * 100;

    return (
        <label className="simulationSlider">
            <p className="sliderLabel">{label}</p>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="sliderInput"
                style={{ "--fillPercent": `${fillPercent}%` }}
            />
            <p className="sliderValue">{formatValue ? formatValue(value) : value}</p>
        </label>
    );
}

export default SimulationSlider;