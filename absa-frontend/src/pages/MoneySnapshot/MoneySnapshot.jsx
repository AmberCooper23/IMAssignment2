import React, { useState } from "react";
import "./MoneySnapshot.css";

import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import OverviewTab from "../../components/Tabs/OverviewTab/OverviewTab";
import SavingsTab from "../../components/Tabs/SavingsTab/SavingsTab";
import DebtTab from "../../components/Tabs/DebtTab/DebtTab";
import GoalsTab from "../../components/Tabs/GoalsTab/GoalsTab";
import BudgetPlanTab from "../../components/Tabs/BudgetPlanTab/BudgetPlanTab";

function MoneySnapshot({ user }) {
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
          <button
            className="editProfileBtn"
            onClick={() => setShowModal(true)}
            disabled={!user}
          >
            {user ? "Edit your financial profile" : "Login required to edit"}
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

      {activeTab === "overview" && <OverviewTab disabled={!user} />}
      {activeTab === "savings" && <SavingsTab disabled={!user} />}
      {activeTab === "debt" && <DebtTab disabled={!user} />}
      {activeTab === "goals" && <GoalsTab disabled={!user} />}
      {activeTab === "budgetPlan" && <BudgetPlanTab disabled={!user} />}

      {showModal && user && (
        <EditProfileModal onClose={() => setShowModal(false)} />
      )}

      {!user && (
        <div className="loginNotice">
          <p>
            You can explore this snapshot, but you must log in to edit or save
            changes.
          </p>
        </div>
      )}
    </main>
  );
}

export default MoneySnapshot;
