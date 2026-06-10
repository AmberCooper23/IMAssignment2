import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import StrategyTrackContext from "../../context/StrategyTrackContext";
import "./MaverickTrack.css";

function MaverickTrack() {
  const { ra, income, offshorePercent } = useContext(FinanceContext);
  const { tracks } = useContext(StrategyTrackContext);

  const maverickTrack = tracks.find((t) => t.id === "maverick");

  return (
    <div className="OrangeTrackContainer">
      <div className="OrangeTrackHeader orangeStratCard">
        <h1 className="OrangeTrackTitle">{maverickTrack.name}</h1>
        <p className="OrangeTrackDescription">
          Maximise offshore exposure and tech stocks for long term wealth
          building.
        </p>
        <div className="OrangeTrackPriorities">
          <button className="OrangePriorityButton">Offshore ETFs</button>
          <button className="OrangePriorityButton">Tech stocks</button>
          <button className="OrangePriorityButton">Aggressive growth</button>
        </div>
      </div>

      <div className="OrangeNudgesGrid">
        <div className="OrangeNudgeCard OrangeNudgeSuccess">
          <div className="OrangeNudgeTitle">On Track</div>
          <p className="OrangeNudgeMessage">
            Your offshore allocation is growing well — ensure you’re within
            exchange control limits.
          </p>
        </div>
        <div className="OrangeNudgeCard OrangeNudgeSuccess">
          <div className="OrangeNudgeTitle">On Track</div>
          <p className="OrangeNudgeMessage">
            Great progress on Year{" "}
            {maverickTrack.milestones.find(
              (m) => m.progress > 0 && m.progress < 100,
            )?.year || 1}{" "}
            milestones!
          </p>
        </div>
      </div>

      <div className="OrangeTimelineCard">
        <h2 className="OrangeTimelineTitle">Your 5-Year Journey</h2>
        {maverickTrack.milestones.map((milestone, idx) => (
          <div key={idx} className="OrangeTimelineItem">
            <div
              className={`OrangeTimelineCircle ${
                milestone.progress >= 100
                  ? "OrangeTimelineCircleComplete"
                  : "OrangeTimelineCirclePending"
              }`}
            >
              {`Y${milestone.year}`}
            </div>
            <div className="OrangeMilestoneCard">
              <h3 className="OrangeMilestoneTitle">{milestone.title}</h3>
              <p className="OrangeMilestoneDescription">
                {milestone.description}
              </p>
              <div className="OrangeProgressBar">
                <div
                  className="OrangeProgressFill"
                  style={{ width: `${milestone.progress}%` }}
                ></div>
              </div>
              <div className="OrangeProgressValue">
                {milestone.progress}% Complete
              </div>
              {milestone.progress > 0 && milestone.progress < 100 && (
                <div className="OrangeNextStep">
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
              <div className="tradeoffTitle">Higher Risk</div>
              <div className="tradeoffText">
                Offshore exposure means currency risk and market volatility.
              </div>
            </div>
          </div>
          <div className="tradeoffItem">
            <div>
              <div className="tradeoffTitle">Property Delayed</div>
              <div className="tradeoffText">
                Focus on investments means property ownership comes later.
              </div>
            </div>
          </div>
        </div>

        <div className="forecastCard">
          <h4 className="sectionTitle">Year 5 Forecast</h4>
          <div className="forecastContainer">
            <h1 className="forecastOutcome">R500k Global Portfolio</h1>
            <div className="forecastLabel">Expected outcome by 2031</div>
          </div>
          <div className="forecastStats">
            <div className="forecastRow">
              <span>Emergency Fund</span>
              <span>R100k</span>
            </div>
            <div className="forecastRow">
              <span>Investment Portfolio</span>
              <span>R500k</span>
            </div>
            <div className="forecastRow">
              <span>Offshore Allocation</span>
              <span>40%</span>
            </div>
            <div className="forecastRow">
              <span>Property Ownership</span>
              <span>Not yet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MaverickTrack;
