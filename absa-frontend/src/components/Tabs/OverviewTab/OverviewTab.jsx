import React, { useContext } from "react";
import FinanceContext from "../../../context/FinanceContext";
import GoalsContext from "../../../context/GoalsContext";
import MoneySnapshotCard from "../../../components/MoneySnapshotCard/MoneySnapshotCard";
import "./OverviewTab.css";

function OverviewTab() {
  const { income, takeHome, savingsRate, totalDebt } =
    useContext(FinanceContext);
  const { goalSavingsRate, goalDebtFreeYear, yearsUntilDebtFree } =
    useContext(GoalsContext);

  return (
    <>
      <section className="financialStoryContainer">
        <h1 className="storyTitle">Your Financial Story</h1>
        <ul className="storyText">
          <li>
            You're building a foundation with a {savingsRate}% savings rate.{" "}
            {savingsRate < 10
              ? "This is below average — consider increasing it."
              : "This is healthy for your income band."}
          </li>
          <li>
            Your debt-to-income ratio is{" "}
            {((totalDebt / income) * 100).toFixed(1)}%.{" "}
            {totalDebt / income > 0.4
              ? "This may affect bond approval."
              : "This is within a safe range."}
          </li>
          <li>
            Target savings rate: {goalSavingsRate}% | Debt‑free by{" "}
            {goalDebtFreeYear}
            {yearsUntilDebtFree && ` (${yearsUntilDebtFree} years from now)`}
          </li>
        </ul>
      </section>

      <section className="moneySnapshotCardContainer">
        <MoneySnapshotCard
          title="Monthly Income"
          number={`R${income}`}
          subtitle="Before deductions"
        />
        <MoneySnapshotCard
          title="Take Home"
          number={`R${takeHome}`}
          subtitle="After tax & deductions"
        />
        <MoneySnapshotCard
          title="Savings Rate"
          number={`${savingsRate}%`}
          subtitle="Of take-home pay"
        />
        <MoneySnapshotCard
          title="Total Debt"
          number={`R${totalDebt}`}
          subtitle="All loans combined"
        />
      </section>
    </>
  );
}

export default OverviewTab;
