import React from "react";
import { NavLink } from "react-router-dom";
import "./SimulationLabCard.css";

function SimulationLabCard({ title, category, description, to, ready = false }) {
    return (
        <article className="simulationLabCard">
            <header className="simulationLabCardHeader">
                <h2 className="simulationLabCardTitle">{title}</h2>
                <p className="simulationLabCardCategory">{category}</p>
            </header>
            <p className="simulationLabCardText">{description}</p>

            {ready ? (
                <NavLink to={to} className="runSimulationLink">
                    Run Simulation →
                </NavLink>
            ) : (
                <p className="underConstructionText">Under Construction</p>
            )}
        </article>
    );
}

export default SimulationLabCard;
