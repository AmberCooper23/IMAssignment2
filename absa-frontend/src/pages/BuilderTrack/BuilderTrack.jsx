import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./BuilderTrack.css";

function BuilderTrack() {
  const { emergencyFund, homeLoan } = useContext(FinanceContext);
  const { tracks } = useContext(StrategyTrackContext);

  const builderTrack = tracks.find((t) => t.id === "builder");

  return (
    <div className="trackContainer">
      <div className="trackHeader">
        <div className="trackIcon craneIcon"></div>
        <h1 className="trackTitle">{builderTrack.name}</h1>
        <p className="trackDescription">
          Focus on saving for property deposit and building credit for bond
          approval.
        </p>
        <div className="trackPriorities">
          <button className="priorityButton">Saving deposit</button>
          <button className="priorityButton">Building credit</button>
          <button className="priorityButton">Minimizing lifestyle creep</button>
        </div>
      </div>

      <div className="nudgesGrid">
        <div className="nudgeCard nudgeWarning">
          <div className="nudgeTitle">Nudge Alert</div>
          <p className="nudgeMessage">
            Your car repayment is slowing deposit saving! Consider a more
            affordable vehicle.
          </p>
        </div>
        <div className="nudgeCard nudgeSuccess">
          <div className="nudgeTitle">On Track</div>
          <p className="nudgeMessage">Great progress on Year 1 milestones!</p>
        </div>
      </div>

      <div className="timelineCard">
        <h2 className="timelineTitle">Your 5-Year Journey</h2>
        {builderTrack.milestones.map((milestone, idx) => (
          <div key={idx} className="timelineItem">
            <div
              className={`timelineCircle ${
                milestone.progress >= 100
                  ? "timelineCircleComplete"
                  : "timelineCirclePending"
              }`}
            >
              {`Y${milestone.year}`}
            </div>

            <div className="milestoneCard">
              <h3 className="milestoneTitle">{milestone.title}</h3>
              <p className="milestoneDescription">{milestone.description}</p>
              <div className="progressBar">
                <div
                  className="progressFill"
                  style={{ width: `${milestone.progress}%` }}
                ></div>
              </div>
              <div className="progressValue">
                {milestone.progress}% Complete
              </div>
              {milestone.progress > 0 && milestone.progress < 100 && (
                <div className="nextStep">
                  <strong>Next Step:</strong> Continue your current savings rate
                  to reach this milestone by {2026 + milestone.year - 1}.
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="tradeoffsForecastGrid">
        <div className="tradeoffsCard">
          <h3 className="sectionTitle">Trade-offs to Consider</h3>
          <div className="tradeoffItem">
            <div>
              <div className="tradeoffTitle">Property Focus</div>
              <div className="tradeoffText">
                You'll build equity but have less liquid investments in the
                short term.
              </div>
            </div>
          </div>
          <div className="tradeoffItem">
            <div>
              <div className="tradeoffTitle">Lifestyle Constraints</div>
              <div className="tradeoffText">
                Aggressive saving means limited luxury spending while building
                deposit.
              </div>
            </div>
          </div>
        </div>

        <div className="forecastCard">
          <h4 className="sectionTitle">Year 5 Forecast</h4>
          <div className="forecastContainer">
            <h1 className="forecastOutcome">Property Owner</h1>
            <div className="forecastLabel">Expected outcome by 2031</div>
          </div>

          <div className="forecastStats">
            <div className="forecastRow">
              <span>Emergency Fund</span>
              <span>R75k</span>
            </div>
            <div className="forecastRow">
              <span>Investment Portfolio</span>
              <span>R50k</span>
            </div>
            <div className="forecastRow">
              <span>Offshore Allocation</span>
              <span>0%</span>
            </div>
            <div className="forecastRow">
              <span>Property Ownership</span>
              <span>Yes (R1.2M)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuilderTrack;
