import React, { useContext, useState } from "react";
import FinanceContext from "../../context/FinanceContext";
import "./EditProfileModal.css";

function EditProfileModal({ onClose }) {
  const {
    income,
    setIncome,
    tax,
    setTax,
    savingsRate,
    setSavingsRate,
    emergencyFund,
    setEmergencyFund,
    totalDebt,
    setTotalDebt,
    goalSavingsRate,
    setGoalSavingsRate,
    goalDebtFreeYear,
    setGoalDebtFreeYear,
  } = useContext(FinanceContext);

  const [activeTab, setActiveTab] = useState("income");

  // Local draft state
  const [draftIncome, setDraftIncome] = useState(income);
  const [draftTax, setDraftTax] = useState(tax);
  const [draftSavingsRate, setDraftSavingsRate] = useState(savingsRate);
  const [draftEmergencyFund, setDraftEmergencyFund] = useState(emergencyFund);
  const [draftTotalDebt, setDraftTotalDebt] = useState(totalDebt);
  const [draftGoalSavingsRate, setDraftGoalSavingsRate] =
    useState(goalSavingsRate);
  const [draftGoalDebtFreeYear, setDraftGoalDebtFreeYear] =
    useState(goalDebtFreeYear);

  // Error state
  const [errors, setErrors] = useState({});

  // Validation helper
  const sanitizeNumberInput = (field, value) => {
    // Allow digits, decimal point, and minus sign
    const cleaned = value.replace(/[^0-9.-]/g, "");
    if (cleaned === "" || cleaned === "-" || cleaned === ".") {
      setErrors((prev) => ({ ...prev, [field]: null }));
      return cleaned; // keep showing raw input
    }

    const num = parseFloat(cleaned);
    if (isNaN(num)) {
      setErrors((prev) => ({ ...prev, [field]: "Invalid number" }));
      return cleaned;
    }

    if (num < 0) {
      setErrors((prev) => ({ ...prev, [field]: "Value cannot be negative" }));
      return cleaned; // keep showing the negative so user sees it
    }

    setErrors((prev) => ({ ...prev, [field]: null }));
    // Round to 2 decimals
    return Math.round(num * 100) / 100;
  };

  const handleSave = () => {
    const hasErrors = Object.values(errors).some((err) => err);
    if (hasErrors) return;

    setIncome(draftIncome);
    setTax(draftTax);
    setSavingsRate(draftSavingsRate);
    setEmergencyFund(draftEmergencyFund);
    setTotalDebt(draftTotalDebt);
    setGoalSavingsRate(draftGoalSavingsRate);
    setGoalDebtFreeYear(draftGoalDebtFreeYear);
    onClose();
  };

  return (
    <section role="dialog" aria-modal="true" className="modalOverlay">
      <section className="modalContent">
        <header className="modalHeader">
          <h2>Edit Financial Profile</h2>
          <p>Update your current financial details and long‑term goals.</p>
        </header>

        {/* Tab Navigation */}
        <nav className="modalNav">
          <button
            className={`income ${activeTab === "income" ? "active income" : ""}`}
            onClick={() => setActiveTab("income")}
          >
            💰 Income & Tax
          </button>
          <button
            className={`savings ${activeTab === "savings" ? "active savings" : ""}`}
            onClick={() => setActiveTab("savings")}
          >
            💾 Savings & Emergency Fund
          </button>
          <button
            className={`debt ${activeTab === "debt" ? "active debt" : ""}`}
            onClick={() => setActiveTab("debt")}
          >
            📉 Debt & Goals
          </button>
        </nav>

        <form className="modalForm">
          {activeTab === "income" && (
            <fieldset>
              <legend>Income & Tax</legend>
              <p className="tabDescription">
                Your gross salary and deductions.
              </p>
              <div className="fieldsetGrid">
                <label>
                  Monthly Income (ZAR)
                  <input
                    type="text"
                    value={draftIncome}
                    onChange={(e) =>
                      setDraftIncome(
                        sanitizeNumberInput("income", e.target.value),
                      )
                    }
                  />
                  {errors.income && (
                    <span className="errorText">{errors.income}</span>
                  )}
                </label>
                <label>
                  Monthly Tax (ZAR)
                  <input
                    type="text"
                    value={draftTax}
                    onChange={(e) =>
                      setDraftTax(sanitizeNumberInput("tax", e.target.value))
                    }
                  />
                  {errors.tax && (
                    <span className="errorText">{errors.tax}</span>
                  )}
                </label>
              </div>
            </fieldset>
          )}

          {activeTab === "savings" && (
            <fieldset>
              <legend>Savings & Emergency Fund</legend>
              <p className="tabDescription">
                How much of your income you save.
              </p>
              <div className="fieldsetGrid">
                <label>
                  Savings Rate (%)
                  <input
                    type="text"
                    value={draftSavingsRate}
                    onChange={(e) =>
                      setDraftSavingsRate(
                        sanitizeNumberInput("savingsRate", e.target.value),
                      )
                    }
                  />
                  {errors.savingsRate && (
                    <span className="errorText">{errors.savingsRate}</span>
                  )}
                </label>
                <label>
                  Emergency Fund (ZAR)
                  <input
                    type="text"
                    value={draftEmergencyFund}
                    onChange={(e) =>
                      setDraftEmergencyFund(
                        sanitizeNumberInput("emergencyFund", e.target.value),
                      )
                    }
                  />
                  {errors.emergencyFund && (
                    <span className="errorText">{errors.emergencyFund}</span>
                  )}
                </label>
              </div>
            </fieldset>
          )}

          {activeTab === "debt" && (
            <fieldset>
              <legend>Debt & Goals</legend>
              <p className="tabDescription">
                Your outstanding balances and targets.
              </p>
              <div className="fieldsetGrid">
                <label>
                  Total Debt (ZAR)
                  <input
                    type="text"
                    value={draftTotalDebt}
                    onChange={(e) =>
                      setDraftTotalDebt(
                        sanitizeNumberInput("totalDebt", e.target.value),
                      )
                    }
                  />
                  {errors.totalDebt && (
                    <span className="errorText">{errors.totalDebt}</span>
                  )}
                </label>
                <label>
                  Target Savings Rate (%)
                  <input
                    type="text"
                    value={draftGoalSavingsRate}
                    onChange={(e) =>
                      setDraftGoalSavingsRate(
                        sanitizeNumberInput("goalSavingsRate", e.target.value),
                      )
                    }
                  />
                  {errors.goalSavingsRate && (
                    <span className="errorText">{errors.goalSavingsRate}</span>
                  )}
                </label>
                <label>
                  Debt‑Free Year
                  <input
                    type="text"
                    value={draftGoalDebtFreeYear}
                    onChange={(e) =>
                      setDraftGoalDebtFreeYear(
                        sanitizeNumberInput("goalDebtFreeYear", e.target.value),
                      )
                    }
                  />
                  {errors.goalDebtFreeYear && (
                    <span className="errorText">{errors.goalDebtFreeYear}</span>
                  )}
                </label>
              </div>
            </fieldset>
          )}

          <footer className="modalActions">
            <button type="button" className="closeBtn" onClick={onClose}>
              Close
            </button>
            <button
              type="button"
              className={`saveBtn ${activeTab}`}
              onClick={handleSave}
            >
              Save
            </button>
          </footer>
        </form>
      </section>
    </section>
  );
}

export default EditProfileModal;
