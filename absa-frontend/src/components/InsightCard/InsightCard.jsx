import React from "react";
import "./InsightCard.css";

function InsightCard({title, description, className}) {
    return (
        <article className={`insightCard ${className || ""}`}>
            <h2 className="insightCardTitle">{title}</h2>
            <p className="insightCardText">{description}</p>
        </article>
    );
}

export default InsightCard