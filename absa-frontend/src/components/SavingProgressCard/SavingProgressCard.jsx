import React, {useContext} from "react";
import FinanceContext from "../../context/FinanceContext";
import GoalsContext from "../../context/GoalsContext";
import "./SavingProgressCard.css";

function SavingProgressCard() {
  const {emergencyFund, tfsa, investments} = useContext(FinanceContext);
  const {
    goalEmergencyFund, goalTfsaAnnual, goalTfsaLifetime, goalInvestments,
    emergencyFundProgress, tfsaAnnualProgress, tfsaLifetimeProgress, investmentsProgress
  } = useContext(GoalsContext);

  const items = [
    {
      title: "Emergency Fund",
      current: emergencyFund,
      goal: goalEmergencyFund,
      progress: goalEmergencyFund > 0 ? emergencyFundProgress(emergencyFund) : 0,
      note: goalEmergencyFund > 0 ? `Target: R${goalEmergencyFund}` : "No goal set"
    },
    {
      title: "TFSA (Tax-Free Savings)",
      current: tfsa,
      goal: goalTfsaAnnual,
      progress: goalTfsaAnnual > 0 ? tfsaAnnualProgress(tfsa) : 0,
      note: goalTfsaAnnual > 0
        ? `Annual limit: R${goalTfsaAnnual}, Lifetime: R${goalTfsaLifetime}`
        : "No goal set"
    },
    {
      title: "Investments",
      current: investments,
      goal: goalInvestments,
      progress: goalInvestments > 0 ? investmentsProgress(investments) : 0,
      note: goalInvestments > 0 ? `Target: R${goalInvestments}` : "No goal set"
    }
  ];

  return (
    <section className="savingsProgressWrapper">
      <h2 className="savingsProgressTitle">Savings Progress</h2>
      {items.map((item, index) => {
        let progressClass = "progress-red";
        if (item.progress >= 76) {
          progressClass = "progress-green";
        } else if (item.progress >= 51) {
          progressClass = "progress-yellow";
        } else if (item.progress >= 26) {
          progressClass = "progress-orange";
        }
        return (
          <article key={index} className="savingsItem">
            <header>
              <h3>{item.title}</h3>
              <p><strong>R{item.current}</strong></p>
            </header>
            <progress
              value={item.progress}
              max="100"
              className={progressClass}
            >
              {item.progress}%
            </progress>
            <p className="note">{item.note}</p>
          </article>
        );
      })}
    </section>
  );
}

export default SavingProgressCard;
