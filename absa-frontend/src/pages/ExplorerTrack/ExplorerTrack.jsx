import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./ExplorerTrack.css";

function ExplorerTrack() {
  const { ra, income, investments, offshorePercent } =
    useContext(FinanceContext);
  const { tracks } = useContext(StrategyTrackContext);

  const explorerTrack = tracks.find((t) => t.id === "explorer");

  return (
    <div className="GreenTrackContainer">
      <div className="GreenTrackHeader greenStratCard">
        <h1 className="GreenTrackTitle">{explorerTrack.name}</h1>
        <p className="GreenTrackDescription">
          Balance lifestyle enjoyment with steady local investments and offshore
          diversification.
        </p>
        <div className="GreenTrackPriorities">
          <button className="GreenPriorityButton">Lifestyle balance</button>
          <button className="GreenPriorityButton">Local investments</button>
          <button className="GreenPriorityButton">
            Gradual offshore allocation
          </button>
        </div>
      </div>

      <div className="GreenNudgesGrid">
        <div className="GreenNudgeCard GreenNudgeSuccess">
          <div className="GreenNudgeTitle">On Track</div>
          <p className="GreenNudgeMessage">
            You're on track with RA contributions - consider adding offshore
            ETFs to diversify!
          </p>
        </div>
        <div className="GreenNudgeCard GreenNudgeSuccess">
          <div className="GreenNudgeTitle">On Track</div>
          <p className="GreenNudgeMessage">
            Great progress on Year{" "}
            {explorerTrack.milestones.find(
              (m) => m.progress > 0 && m.progress < 100,
            )?.year || 1}{" "}
            milestones!
          </p>
        </div>
      </div>

      <div className="GreenTimelineCard">
        <h2 className="GreenTimelineTitle">Your 5-Year Journey</h2>
        {explorerTrack.milestones.map((milestone, idx) => (
          <div key={idx} className="GreenTimelineItem">
            <div
              className={`GreenTimelineCircle ${
                milestone.progress >= 100
                  ? "GreenTimelineCircleComplete"
                  : "GreenTimelineCirclePending"
              }`}
            >
              {`Y${milestone.year}`}
            </div>
            <div className="GreenMilestoneCard">
              <h3 className="GreenMilestoneTitle">{milestone.title}</h3>
              <p className="GreenMilestoneDescription">
                {milestone.description}
              </p>
              <div className="GreenProgressBar">
                <div
                  className="GreenProgressFill"
                  style={{ width: `${milestone.progress}%` }}
                ></div>
              </div>
              <div className="GreenProgressValue">
                {milestone.progress}% Complete
              </div>
              {milestone.progress > 0 && milestone.progress < 100 && (
                <div className="nextStep">
                  <strong>Next Step:</strong> Continue your current savings rate
                  to reach this GreenMilestone by {2026 + milestone.year - 1}.
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
              <div className="tradeoffTitle">Balanced Approach</div>
              <div className="tradeoffText">
                You won't maximize any single goal but maintain lifestyle
                quality.
              </div>
            </div>
          </div>
          <div className="tradeoffItem">
            <div>
              <div className="tradeoffTitle">Gradual Offshore</div>
              <div className="tradeoffText">
                Slower international diversification but lower risk exposure.
              </div>
            </div>
          </div>
        </div>

        <div className="forecastCard">
          <h4 className="sectionTitle">Year 5 Forecast</h4>
          <div className="forecastContainer">
            <h1 className="forecastOutcome">R250k Portfolio</h1>
            <div className="forecastLabel">Expected outcome by 2031</div>
          </div>
          <div className="forecastStats">
            <div className="forecastRow">
              <span>Emergency Fund</span>
              <span>R90k</span>
            </div>
            <div className="forecastRow">
              <span>Investment Portfolio</span>
              <span>R250k</span>
            </div>
            <div className="forecastRow">
              <span>Offshore Allocation</span>
              <span>20%</span>
            </div>
            <div className="forecastRow">
              <span>Property Ownership</span>
              <span>Maybe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorerTrack;
