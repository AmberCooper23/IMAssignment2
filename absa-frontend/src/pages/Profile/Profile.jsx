import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FinanceContext from "../../context/FinanceContext";
import "./Profile.css";

function Profile({ user, setUser }) {
  const {
    income,
    tax,
    savingsRate,
    emergencyFund,
    totalDebt,
    goalSavingsRate,
    goalDebtFreeYear,
    setFinanceData,
  } = useContext(FinanceContext);

  const [activeTab, setActiveTab] = useState("income");

  const [draftIncome, setDraftIncome] = useState(income);
  const [draftTax, setDraftTax] = useState(tax);
  const [draftSavingsRate, setDraftSavingsRate] = useState(savingsRate);
  const [draftEmergencyFund, setDraftEmergencyFund] = useState(emergencyFund);
  const [draftTotalDebt, setDraftTotalDebt] = useState(totalDebt);
  const [draftGoalSavingsRate, setDraftGoalSavingsRate] =
    useState(goalSavingsRate);
  const [draftGoalDebtFreeYear, setDraftGoalDebtFreeYear] =
    useState(goalDebtFreeYear);

  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();

    setFinanceData((prev) => ({
      ...prev,
      income: draftIncome || 0,
      tax: draftTax || 0,
      savingsRate: draftSavingsRate || 0,
      emergencyFund: draftEmergencyFund || 0,
      totalDebt: draftTotalDebt || 0,
      goalSavingsRate: draftGoalSavingsRate || 0,
      goalDebtFreeYear: draftGoalDebtFreeYear || new Date().getFullYear(),
    }));

    navigate("/moneySnapshot");
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="profilePage">
        <h1>Profile</h1>
        <p>No user logged in.</p>
      </div>
    );
  }

  return (
    <div className="profilePage">
      <header className="profileHeader">
        <h1>Profile</h1>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </header>

      <nav className="profileNav">
        <button
          className={activeTab === "income" ? "active" : ""}
          onClick={() => setActiveTab("income")}
        >
          💰 Income & Tax
        </button>
        <button
          className={activeTab === "savings" ? "active" : ""}
          onClick={() => setActiveTab("savings")}
        >
          💾 Savings & Emergency Fund
        </button>
        <button
          className={activeTab === "debt" ? "active" : ""}
          onClick={() => setActiveTab("debt")}
        >
          📉 Debt & Goals
        </button>
      </nav>

      <form className="profileForm" onSubmit={handleSave}>
        {activeTab === "income" && (
          <fieldset>
            <legend>Income & Tax</legend>
            <div className="fieldsetGrid">
              <label>
                Monthly Income (ZAR)
                <input
                  type="number"
                  value={draftIncome}
                  onChange={(e) =>
                    setDraftIncome(
                      e.target.value === "" ? "" : parseFloat(e.target.value),
                    )
                  }
                />
              </label>
              <label>
                Monthly Tax (ZAR)
                <input
                  type="number"
                  value={draftTax}
                  onChange={(e) =>
                    setDraftTax(
                      e.target.value === "" ? "" : parseFloat(e.target.value),
                    )
                  }
                />
              </label>
            </div>
          </fieldset>
        )}

        {activeTab === "savings" && (
          <fieldset>
            <legend>Savings & Emergency Fund</legend>
            <div className="fieldsetGrid">
              <label>
                Savings Rate (%)
                <input
                  type="number"
                  value={draftSavingsRate}
                  onChange={(e) =>
                    setDraftSavingsRate(
                      e.target.value === "" ? "" : parseFloat(e.target.value),
                    )
                  }
                />
              </label>
              <label>
                Emergency Fund (ZAR)
                <input
                  type="number"
                  value={draftEmergencyFund}
                  onChange={(e) =>
                    setDraftEmergencyFund(
                      e.target.value === "" ? "" : parseFloat(e.target.value),
                    )
                  }
                />
              </label>
            </div>
          </fieldset>
        )}

        {activeTab === "debt" && (
          <fieldset>
            <legend>Debt & Goals</legend>
            <div className="fieldsetGrid">
              <label>
                Total Debt (ZAR)
                <input
                  type="number"
                  value={draftTotalDebt}
                  onChange={(e) =>
                    setDraftTotalDebt(
                      e.target.value === "" ? "" : parseFloat(e.target.value),
                    )
                  }
                />
              </label>
              <label>
                Target Savings Rate (%)
                <input
                  type="number"
                  value={draftGoalSavingsRate}
                  onChange={(e) =>
                    setDraftGoalSavingsRate(
                      e.target.value === "" ? "" : parseFloat(e.target.value),
                    )
                  }
                />
              </label>
              <label>
                Debt-Free Year
                <input
                  type="number"
                  value={draftGoalDebtFreeYear}
                  onChange={(e) =>
                    setDraftGoalDebtFreeYear(
                      e.target.value === "" ? "" : parseInt(e.target.value),
                    )
                  }
                />
              </label>
            </div>
          </fieldset>
        )}

        <footer className="profileActions">
          <button type="submit">Save & Go to Dashboard</button>
          <button type="button" onClick={handleLogout}>
            Log Out
          </button>
        </footer>
      </form>
    </div>
  );
}

export default Profile;
