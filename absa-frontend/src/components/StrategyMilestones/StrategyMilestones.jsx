import React, { useContext } from "react";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./StrategyMilestones.css";

function StrategyTrackMilestones({ user }) {
  const { tracks } = useContext(StrategyTrackContext);

  return (
    <section className="strategyTrackWrapper">
      <h2 className="strategyTrackTitle">Strategy Track Milestones</h2>
      {tracks.map(track => {
        const completed = track.milestones.filter(m => m.progress >= 100).length;
        const inProgress = track.milestones.filter(m => m.progress > 0 && m.progress < 100).length;

        return (
          <article key={track.id} className={`trackCard ${track.id}Track`}>
            <header className="trackHeader">
              <div className="trackHeaderLeft">
                <h3 className="trackName">{track.name}</h3>
                <p className="trackDescription">{track.description}</p>
              </div>
              <div className="completionTopRight">
                <span className="completionText">
                  {user ? `${completed}/${track.milestones.length} Complete` : "Progress available when logged in"}
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
                    <span className="milestonePercent">
                      {user ? `${Math.round(m.progress)}%` : "—"}
                    </span>
                  </div>
                  <p className="milestoneTitle">{m.title}</p>
                  <div className={`progressBar ${m.progress === 0 ? "noProgress" : ""}`}>
                    <div
                      className="progressFill"
                      style={{ width: user ? `${Math.round(m.progress)}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <footer className="trackFooter">
              <div className="statusBanner">
                <span className="statusEmoji">💪</span>
                <span className="statusText">
                  {user
                    ? `You have ${inProgress} milestones in progress on this track!`
                    : "Log in to track your milestone progress."}
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
