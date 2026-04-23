import React from "react";
import "./VerdictTile.css";

function VerdictTile({ headline, pros = [], cons = [], solution }) {
    return (
        <section className="verdictRow">
            <article className="verdictCard">
                <h3 className="cardTitle">Pros</h3>
                <ul className="verdictList">
                    {pros.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </article>
            <article className="verdictCard">
                <h3 className="cardTitle">Cons</h3>
                <ul className="verdictList">
                    {cons.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </article>
            <article className="verdictCard">
                <h3 className="cardTitle">Solution</h3>
                <p className="solutionText">{solution}</p>
            </article>
        </section>
    );
}

export default VerdictTile;
