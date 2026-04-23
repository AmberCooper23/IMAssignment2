import React, { useContext } from "react";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./StrategyMilestones.css";

function StrategyTrackMilestones() {
  const { tracks } = useContext(StrategyTrackContext);

  return (
    <section className="strategyTrackWrapper">
      <h2 className="strategyTrackTitle">Strategy Track Milestones</h2>
      {tracks.map(track => {
        const completed = track.milestones.filter(m => m.progress >= 100).length;
        const inProgress = track.milestones.filter(m => m.progress > 0 && m.progress < 100).length;

        return (
          <article key={track.id} className="trackCard">
            <header className="trackHeader">
              <div className="trackHeaderLeft">
                <h3 className="trackName">{track.name}</h3>
                <p className="trackDescription">{track.description}</p>
              </div>
              <div className="completionTopRight">
                <span className="completionText">
                  {completed}/{track.milestones.length} Complete
                </span>
              </div>
            </header>

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

            <footer className="trackFooter">
              <div className="statusBanner">
                <span className="statusEmoji">💪</span>
                <span className="statusText">
                  You have {inProgress} milestones in progress on this track!
                </span>
              </div>
            </footer>
          </article>
        );
      })}
    </section>
  );
}

export default StrategyTrackMilestones;