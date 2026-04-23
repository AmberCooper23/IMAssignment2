import React, {useContext} from "react";
import FinanceContext from "../../context/FinanceContext";
import GoalsContext from "../../context/GoalsContext";
import "./ProgressMap.css";
import AchievementGallery from "../../components/AchievementGallery/AchievementGallery";
import StrategyMilestones from "../../components/StrategyMilestones/StrategyMilestones";

function ProgressMap() {
        const {emergencyFund, tfsa, investments, studentLoan, carLoan, homeLoan, personalLoan} = useContext(FinanceContext);
        const {goalEmergencyFund, goalTfsaAnnual, goalInvestments, goalDebtFreeYear} = useContext(GoalsContext);

  const achievements = [
    {
      title: "Emergency Fund Starter",
      description: "Saved your first R10,000 in emergency funds",
      unlocked: true,
    },
    {
      title: "RA Champion",
      description: "Contributing 10%+ to your Retirement Annuity",
      unlocked: true,
    },
    {
      title: "TFSA Explorer",
      description: "Opened and funded your Tax-Free Savings Account",
      unlocked: true,
    },
    {
      title: "Debt Defeater",
      description: "Pay off 25% of your total debt",
      unlocked: true,
    },
    {
      title: "Offshore Pioneer",
      description: "Allocate 10% of portfolio to offshore investments",
      unlocked: true,
    },
    {
      title: "Emergency Fund Master",
      description: "Save 6 months of expenses",
      unlocked: false
    }
  ];

        const completed = achievements.filter(a => a.unlocked).length;
        const total = achievements.length;
        const progress = (completed / total) * 100;

        return (
       <main className="progressMap">
        <header className="progressMapHeader">
            <h1 className="progressMapTitle">Progress Map</h1>
            <p className="snapshotSubtitle"> Track your milestones and celebrate your achievements! </p>
        </header> 

        <section className="progressBanner">
            <section className="progressBannerHeader">
                <article>
                <h2 className="progressBannerTitle">Your Journey Progress</h2>
                <p className="progressBannerText">Keep building your financial future, one milestone at a time.</p>
                </article>
                <span className="progressBannerCount">
                    <strong>{completed}/{total}</strong>
                    <div className="progressBannerLabel">Achievements</div>
                </span>
            </section>
            
        <progress value={progress} max="100" className="progressBar">
        {progress}%
      </progress>
        </section>
        <section className="achievements">
          <AchievementGallery/>
        </section>
        <section className="milestones">
          <StrategyMilestones/>
        </section>
    </main> 
    );   
}

export default ProgressMap;