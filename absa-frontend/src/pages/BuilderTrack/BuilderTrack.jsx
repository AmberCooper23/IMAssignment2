import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./BuilderTrack.css";

function BuilderTrack() {
  const { emergencyFund, homeLoan } = useContext(FinanceContext);
  const { tracks } = useContext(StrategyTrackContext);

  const builderTrack = tracks.find((t) => t.id === "builder");

  return (
    <div className="BlueTrackContainer">
      <div className="BlueTrackHeader">
        <div className="BlueTrackIcon craneIcon"></div>
        <h1 className="BlueTrackTitle">{builderTrack.name}</h1>
        <p className="BlueTrackDescription">
          Focus on saving for property deposit and building credit for bond
          approval.
        </p>
        <div className="BlueTrackPriorities">
          <button className="BluePriorityButton">Saving deposit</button>
          <button className="BluePriorityButton">Building credit</button>
          <button className="BluePriorityButton">
            Minimizing lifestyle creep
          </button>
        </div>
      </div>

      <div className="BlueNudgesGrid">
        <div className="BlueNudgeCard BlueNudgeWarning">
          <div className="BlueNudgeTitle">Nudge Alert</div>
          <p className="BlueNudgeMessage">
            Your car repayment is slowing deposit saving! Consider a more
            affordable vehicle.
          </p>
        </div>
        <div className="BlueNudgeCard BlueNudgeSuccess">
          <div className="BlueNudgeTitle">On Track</div>
          <p className="BlueNudgeMessage">
            Great progress on Year 1 milestones!
          </p>
        </div>
      </div>

      <div className="BlueTimelineCard">
        <h2 className="BlueTimelineTitle">Your 5-Year Journey</h2>
        {builderTrack.milestones.map((milestone, idx) => (
          <div key={idx} className="BlueTimelineItem">
            <div
              className={`BlueTimelineCircle ${
                milestone.progress >= 100
                  ? "BlueTimelineCircleComplete"
                  : "BlueTimelineCirclePending"
              }`}
            >
              {`Y${milestone.year}`}
            </div>

            <div className="BlueMilestoneCard">
              <h3 className="BlueMilestoneTitle">{milestone.title}</h3>
              <p className="BlueMilestoneDescription">
                {milestone.description}
              </p>
              <div className="BlueProgressBar">
                <div
                  className="BlueProgressFill"
                  style={{ width: `${milestone.progress}%` }}
                ></div>
              </div>
              <div className="BlueProgressValue">
                {milestone.progress}% Complete
              </div>
              {milestone.progress > 0 && milestone.progress < 100 && (
                <div className="BlueNextStep">
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
