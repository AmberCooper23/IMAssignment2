import React, { useState } from "react";
import "./MoneySnapshot.css";

import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import OverviewTab from "../../components/Tabs/OverviewTab/OverviewTab";
import SavingsTab from "../../components/Tabs/SavingsTab/SavingsTab";
import DebtTab from "../../components/Tabs/DebtTab/DebtTab";
import GoalsTab from "../../components/Tabs/GoalsTab/GoalsTab";
import BudgetPlanTab from "../../components/Tabs/BudgetPlanTab/BudgetPlanTab";

function MoneySnapshot() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

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

      <nav className="snapshotNav">
        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "savings" ? "active" : ""}
          onClick={() => setActiveTab("savings")}
        >
          Savings
        </button>
        <button
          className={activeTab === "debt" ? "active" : ""}
          onClick={() => setActiveTab("debt")}
        >
          Debt
        </button>
        <button
          className={activeTab === "goals" ? "active" : ""}
          onClick={() => setActiveTab("goals")}
        >
          Goals
        </button>
        <button
          className={activeTab === "budgetPlan" ? "active" : ""}
          onClick={() => setActiveTab("budgetPlan")}
        >
          Budget Plan
        </button>
      </nav>

      {activeTab === "overview" && <OverviewTab />}
      {activeTab === "savings" && <SavingsTab />}
      {activeTab === "debt" && <DebtTab />}
      {activeTab === "goals" && <GoalsTab />}
      {activeTab === "budgetPlan" && <BudgetPlanTab />}

      {showModal && <EditProfileModal onClose={() => setShowModal(false)} />}
    </main>
  );
}

export default MoneySnapshot;
