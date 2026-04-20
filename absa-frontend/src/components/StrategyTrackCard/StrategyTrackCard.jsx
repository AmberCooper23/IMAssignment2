import React from "react";
import "./StrategyTrackCard.css";

function StrategyTrackCard({ strategyTrack, archetype, description, priorities, milestones, className }) {
    return (
        <article className="stratTrackCard">
            <header className={`stratTrackCardHeader ${className || ""}`}>
            <h2 className="stratTrackCardTitle">{strategyTrack}</h2>
            <p className="stratTrackCardArchetype">{archetype}</p>
            </header>
            <div className="stratTrackCardContent">
            <p className="stratTrackCardDescription">{description}</p>
            <h4 className="heading">
                Priorities:
            </h4>
            <ul className="stratTrackCardPriorities">
                {priorities.map((priority, index) => (
                    <li key={index}>{priority}</li>
                ))}
            </ul>
            <h4 className="heading">
                5 Year Milestones:
            </h4>
            <ul className={`stratTrackCardMilestones ${className || ""}`}>
                {milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                ))}
            </ul>
            </div>
        </article>
    );
}

export default StrategyTrackCard;