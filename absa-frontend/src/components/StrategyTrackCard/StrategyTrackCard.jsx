import React from "react";
import "./StrategyTrackCard.css";

function StrategyTrackCard({ strategyTrack, archetype, description, priorities, milestones, className }) {
    return (
        <article className="stratTrackCard">
            <header className={`stratTrackCardHeader ${className || ""}`}>
            <h2 className="stratTrackCardTitle">{strategyTrack}</h2>
            <p className="stratTrackCardArchetype">{archetype}</p>
            </header>
            <p className="stratTrackCardDescription">{description}</p>
            <ul className="stratTrackCardPriorities">
                {priorities.map((priority, index) => (
                    <li key={index}>{priority}</li>
                ))}
            </ul>
            <ul className={`stratTrackCardMilestones ${className || ""}`}>
                {milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                ))}
            </ul>
        </article>
    );
}

export default StrategyTrackCard;