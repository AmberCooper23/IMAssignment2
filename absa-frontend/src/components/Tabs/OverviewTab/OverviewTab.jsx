import React, { useContext } from "react";
import FinanceContext from "../../../context/FinanceContext";
import GoalsContext from "../../../context/GoalsContext";
import MoneySnapshotCard from "../../../components/MoneySnapshotCard/MoneySnapshotCard";
import "./OverviewTab.css";

function OverviewTab({ disabled }) {
  const { income, takeHome, savingsRate, totalDebt } =
    useContext(FinanceContext);
  const { goalSavingsRate, goalDebtFreeYear, yearsUntilDebtFree } =
    useContext(GoalsContext);

  return (
    <section className="overviewTab">
      <section className="financialStoryContainer">
        <h1 className="storyTitle">Your Financial Story</h1>
        <ul className="storyText">
          {disabled ? (
            <>
              <li>This page gives you a snapshot of your finances.</li>
              <li>See how savings, debt, and goals fit together.</li>
              <li>Log in to view your personalized numbers and progress.</li>
            </>
          ) : (
            <>
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
                {yearsUntilDebtFree &&
                  ` (${yearsUntilDebtFree} years from now)`}
              </li>
            </>
          )}
        </ul>
      </section>

      <section className="moneySnapshotCardContainer">
        {disabled ? (
          <>
            <MoneySnapshotCard
              title="Monthly Income"
              number="R—"
              subtitle="Before deductions"
            />
            <MoneySnapshotCard
              title="Take Home"
              number="R—"
              subtitle="After tax & deductions"
            />
            <MoneySnapshotCard
              title="Savings Rate"
              number="—%"
              subtitle="Of take-home pay"
            />
            <MoneySnapshotCard
              title="Total Debt"
              number="R—"
              subtitle="All loans combined"
            />
          </>
        ) : (
          <>
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
          </>
        )}
      </section>

      {disabled && (
        <div className="loginNotice">
          <p>
            You can view a general financial story, but you must log in to see
            your actual numbers and save changes.
          </p>
        </div>
      )}
    </section>
  );
}

export default OverviewTab;
