import React, { useContext, useState } from "react";
import "./MoneySnapshot.css";

import MoneySnapshotCard from "../../components/MoneySnapshotCard/MoneySnapshotCard";
import CTACard from "../../components/ctaCard/ctaCard";
import FinanceContext from "../../context/FinanceContext";
import IncomeChart from "../../components/IncomeChart/IncomeChart";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import TaxBenefitsSummary from "../../components/SouthAfricanTaxCard/SouthAfricanTaxCard";
import SavingProgressCard from "../../components/SavingProgressCard/SavingProgressCard";
import DebtPayoffCard from "../../components/DebtPayoffCard/DebtPayoffCard";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";

function MoneySnapshot() {
  const { income, takeHome, savingsRate, totalDebt } =
    useContext(FinanceContext);

  const [showModal, setShowModal] = useState(false);

  return (
    <main className="moneySnapshot">
      <header className="snapshotHeader">
        <h1 className="snapshotTitle">Money Snapshot</h1>
        <div className="snapshotSubtitleRow">
          <p className="snapshotSubtitle">
            Your financial character sheet for March 2026
          </p>
          <button className="editProfileBtn" onClick={() => setShowModal(true)}>
            Edit your financial profile
          </button>
        </div>
      </header>

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
          subtitle="Student + Car finance"
        />
      </section>

      <section className="moneySnapshotGraphs">
        <article className="incomeChartContainer">
          <h1 className="incomeChartHeader">Income Breakdown</h1>
          <IncomeChart />
        </article>
        <article className="expenseChartContainer">
          <h1 className="expenseChartHeader">Expense Breakdown</h1>
          <ExpenseChart />
        </article>
      </section>

      <section className="southAfricanTaxCard">
        <article className="southAfricanTaxCardContainer">
          <h2 className="southAfricanTaxCardHeader">
            South African Tax & Benefits
          </h2>
          <TaxBenefitsSummary />
        </article>
      </section>

      <section className="savingsAndDebtContainer">
        <SavingProgressCard />
        <DebtPayoffCard />
      </section>

      <section className="ctaCardContainer">
        <CTACard
          title="Strategy Track"
          text="Select a strategy track for your 5 year journey."
          className="blueCard"
          to="/strategyTrack"
        />
        <CTACard
          title="Run Simulations"
          text="Test financial decisions with interactive scenarios."
          className="greenCard"
          to="/simulationLab"
        />
        <CTACard
          title="Track Milestones"
          text="View your progress map and achievements."
          className="orangeCard"
          to="/progressMap"
        />
      </section>

      {showModal && <EditProfileModal onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default MoneySnapshot;
