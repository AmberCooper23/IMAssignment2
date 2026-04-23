import React, { useState } from "react";
import "./FirstProperty.css";

function FirstPropertyPath() {
    const [milestones, setMilestones] = useState([
        { year: 1, title: "Emergency Fund (3–6 months)", progress: 0 },
        { year: 2, title: "Deposit Ready (10–20% of property)", progress: 0 },
        { year: 3, title: "Bond Approval (credit score & debt)", progress: 0 },
    ]);

    const handleProgress = (index) => {
        setMilestones((prev) =>
            prev.map((m, i) => {
                if (i === index) {
                    // cycle through 0 → 50 → 100 → 0
                    const next =
                        m.progress === 0 ? 50 : m.progress === 50 ? 100 : 0;
                    return { ...m, progress: next };
                }
                return m;
            })
        );
    };

    const completed = milestones.filter((m) => m.progress >= 100).length;
    const inProgress = milestones.filter((m) => m.progress > 0 && m.progress < 100).length;

    return (
        <main className="trackDetail">
            <header className="trackDetailHeader">
                <h1 className="trackDetailTitle">First Property Path</h1>
                <p className="trackDetailSubtitle">
                    Focus on saving for a property deposit and building credit for bond approval.
                </p>
            </header>

            <section className="milestones">
                <h2 className="milestonesTitle">Milestones</h2>
                <div className="milestoneRow">
                    {milestones.map((m, idx) => (
                        <div
                            key={idx}
                            className={`milestoneCard ${m.progress > 0 ? "hasProgress" : ""}`}
                        >
                            <div className="milestoneTop">
                                <span className="milestoneYear">Year {m.year}</span>
                                <span className="milestonePercent">{m.progress}%</span>
                            </div>
                            <p className="milestoneTitle">{m.title}</p>
                            <div className={`progressBar ${m.progress === 0 ? "noProgress" : ""}`}>
                                <div
                                    className="progressFill"
                                    style={{ width: `${m.progress}%` }}
                                ></div>
                            </div>
                            <button onClick={() => handleProgress(idx)}>
                                {m.progress === 0
                                    ? "Not started"
                                    : m.progress === 50
                                    ? "In progress"
                                    : "Done"}
                            </button>
                        </div>
                    ))}
                </div>
                <div className="completionBanner">
                    <span>
                        {completed}/{milestones.length} Complete — {inProgress} In Progress
                    </span>
                </div>
            </section>

            <section className="recommendations">
                <h2 className="recommendationsTitle">Dynamic Recommendations</h2>
                <p>
                    If your emergency fund is “Not started,” prioritise building at least 3 months of living expenses.
                </p>
                <p>
                    When your deposit is “In progress,” consider a fixed savings account or money market fund.
                </p>
                <p>
                    For “Bond Approval,” reduce debt and check your credit score regularly.
                </p>
            </section>

            <section className="education">
                <h2 className="educationTitle">Philosophy & Trade-offs</h2>
                <p>
                    The First Property Path emphasises stability and ownership. The trade-off is slower investment growth while you prioritise liquidity and creditworthiness.
                </p>
            </section>
        </main>
    );
}

export default FirstPropertyPath;
