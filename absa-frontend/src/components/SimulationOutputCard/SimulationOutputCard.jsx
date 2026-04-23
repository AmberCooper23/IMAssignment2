import React from "react";
import "./SimulationOutputCard.css";

function SimulationOutputCard({ label, value, subtitle, accent = "dark" }) {
    return (
        <article className={`simulationOutputCard simulationOutputCard${accent.charAt(0).toUpperCase() + accent.slice(1)}`}>
            <p className="outputCardLabel">{label}</p>
            <p className="outputCardValue">{value}</p>
            {subtitle && <p className="outputCardSubtitle">{subtitle}</p>}
        </article>
    );
}

export default SimulationOutputCard;
