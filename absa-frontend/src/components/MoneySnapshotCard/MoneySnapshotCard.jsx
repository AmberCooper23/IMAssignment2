import React from "react";
import "./MoneySnapshotCard.css";

function MoneySnapshotCard({title, number, subtitle}) {
    return (
        <article className="moneySnapshotCard">
            <p className="moneySnapshotCardTitle">{title}</p>
            <p className="moneySnapshotCardNumber">{number}</p>
            <p className="moneySnapshotCardSubtitle">{subtitle}</p>
        </article>
    );
}

export default MoneySnapshotCard;