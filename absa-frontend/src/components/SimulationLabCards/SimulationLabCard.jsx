import React from "react";

function SimulationLabCard({title, category, description}){
    return (
        <article className="simulationLabCard">
            <header className="simulationLabCardHeader">
            <h2 className="simulationLabCardTitle">{title}</h2>            
            </header>
            <p className="simulationLabCardText">{description}</p>
        </article>
    );
}

export default SimulationLabCard