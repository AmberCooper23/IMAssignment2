import React, { useContext } from "react";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./FirstProperty.css";

function FirstPropertyPath() {
    const { tracks } = useContext(StrategyTrackContext);
    const track = tracks.find(t => t.id === "builder");

    const completed = track.milestones.filter(m => m.progress >= 100).length;
    const inProgress = track.milestones.filter(m => m.progress > 0 && m.progress < 100).length;

    return (
        <main className="trackDetail">
            <header className="trackDetailHeader">
                <h1 className="trackDetailTitle">{track.name}</h1>
                <p className="trackDetailSubtitle">{track.description}</p>
            </header>

            <section className="milestones">
                <h2 className="milestonesTitle">Milestones</h2>
                <div className="milestoneRow">
                    {track.milestones.map((m, idx) => (
                        <div
                            key={idx}
                            className={`milestoneCard ${m.progress > 0 ? "hasProgress" : ""}`}
                        >
                            <div className="milestoneTop">
                                <span className="milestoneYear">Year {m.year}</span>
                                <span className="milestonePercent">{Math.round(m.progress)}%</span>
                            </div>
                            <p className="milestoneTitle">{m.title}</p>
                            <div className={`progressBar ${m.progress === 0 ? "noProgress" : ""}`}>
                                <div
                                    className="progressFill"
                                    style={{ width: `${Math.round(m.progress)}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="completionBanner">
                    <span>
                        {completed}/{track.milestones.length} Complete — {inProgress} In Progress
                    </span>
                </div>
            </section>

            <section className="recommendations">
                <h2 className="recommendationsTitle">Dynamic Recommendations</h2>
                {track.milestones.map(m => {
                    if (m.title.includes("Emergency Fund") && m.progress === 0) {
                        return <p key={m.title}>Prioritise building at least 3–6 months of living expenses.</p>;
                    }
                    if (m.title.includes("Deposit") && m.progress > 0 && m.progress < 100) {
                        return <p key={m.title}>Consider a fixed savings account or money market fund to grow your deposit safely.</p>;
                    }
                    if (m.title.includes("Bond") && m.progress > 0) {
                        return <p key={m.title}>Reduce debt and check your credit score regularly to improve approval chances.</p>;
                    }
                    return null;
                })}
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
