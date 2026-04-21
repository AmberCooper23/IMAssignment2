import React from "react";

function InsightCard({title, description}) {
    return (
        <article className="insightCard">
            <h2 className="insightCardTitle">{title}</h2>
            <p className="insightCardText">{description}</p>
        </article>
    );
}

export default InsightCard