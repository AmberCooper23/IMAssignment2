import React, { useState } from "react";
import "./BudgetPlanTab.css";

function BudgetPlanTab({ disabled }) {
  const [categories, setCategories] = useState([
    { name: "Income", items: [{ label: "Salary", budget: "", spent: "" }] },
    {
      name: "Personal",
      items: [
        { label: "Entertainment", budget: "", spent: "" },
        { label: "Clothing", budget: "", spent: "" },
      ],
    },
    {
      name: "Utilities",
      items: [
        { label: "Electric", budget: "", spent: "" },
        { label: "Internet", budget: "", spent: "" },
      ],
    },
  ]);

  const updateItem = (catIndex, itemIndex, field, rawValue) => {
    if (disabled) return; // block edits if not logged in
    const newCategories = [...categories];

    if (field !== "label") {
      if (rawValue === "" || rawValue === null) {
        newCategories[catIndex].items[itemIndex][field] = "";
      } else {
        const num = Number(rawValue);
        if (num < 0) {
          alert("You cannot input negative numbers");
          return;
        }
        newCategories[catIndex].items[itemIndex][field] = rawValue;
      }
    } else {
      newCategories[catIndex].items[itemIndex][field] = rawValue;
    }

    setCategories(newCategories);
  };

  const addItemAfter = (catIndex, itemIndex) => {
    if (disabled) return; // block adding rows if not logged in
    const newCategories = [...categories];
    newCategories[catIndex].items.splice(itemIndex + 1, 0, {
      label: "New Item",
      budget: "",
      spent: "",
    });
    setCategories(newCategories);
  };

  const categoryTotals = (cat) => {
    const budget = cat.items.reduce((s, i) => s + (Number(i.budget) || 0), 0);
    const spent = cat.items.reduce((s, i) => s + (Number(i.spent) || 0), 0);
    return { budget, spent, diff: budget - spent };
  };

  const totalBudget = categories.reduce(
    (sum, cat) => sum + categoryTotals(cat).budget,
    0
  );
  const totalSpent = categories.reduce(
    (sum, cat) => sum + categoryTotals(cat).spent,
    0
  );
  const totalDiff = totalBudget - totalSpent;

  return (
    <section className={`budgetPlanTab ${disabled ? "disabled" : ""}`}>
      <header className="budgetPlanHeader">
        <h1 className="budgetPlanTitle">Monthly Budget Planner</h1>
        <p className="budgetPlanSubtitle">
          Track your budget by category. Headings are fixed, but you can edit
          the cell entries.
        </p>
      </header>

      {categories.map((category, catIndex) => {
        const totals = categoryTotals(category);
        return (
          <div key={catIndex} className="budgetCategoryTable">
            <h2 className="categoryTitle">{category.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Budget</th>
                  <th>Spent</th>
                  <th>Difference</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          updateItem(catIndex, itemIndex, "label", e.target.value)
                        }
                        disabled={disabled}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={item.budget}
                        onChange={(e) =>
                          updateItem(catIndex, itemIndex, "budget", e.target.value)
                        }
                        disabled={disabled}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        placeholder="0"
                        value={item.spent}
                        onChange={(e) =>
                          updateItem(catIndex, itemIndex, "spent", e.target.value)
                        }
                        disabled={disabled}
                      />
                    </td>
                    <td className="diffCell">
                      {(Number(item.budget) || 0) - (Number(item.spent) || 0)}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="addRowBtn"
                        onClick={() => addItemAfter(catIndex, itemIndex)}
                        disabled={disabled}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="categoryTotalsRow">
                  <td><strong>Total</strong></td>
                  <td><strong>{totals.budget}</strong></td>
                  <td><strong>{totals.spent}</strong></td>
                  <td><strong>{totals.diff}</strong></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}

      <div className="budgetTotals">
        <p><strong>Overall Budget:</strong> R{totalBudget}</p>
        <p><strong>Overall Spent:</strong> R{totalSpent}</p>
        <p><strong>Overall Difference:</strong> R{totalDiff}</p>
      </div>

      {disabled && (
        <div className="loginNotice">
          <p>You can view this planner, but you must log in to edit or save changes.</p>
        </div>
      )}
    </section>
  );
}

export default BudgetPlanTab;
