import React from "react";
import "./BudgetPlan.css";

import IncomeChart from "../../components/IncomeChart/IncomeChart";
import ExpenseChart from "../../components/ExpenseChart/ExpenseChart";
import TaxBenefitsSummary from "../../components/SouthAfricanTaxCard/SouthAfricanTaxCard";
import SavingProgressCard from "../../components/SavingProgressCard/SavingProgressCard";
import DebtPayoffCard from "../../components/DebtPayoffCard/DebtPayoffCard";

function BudgetPlan() {
  return (
    <main className="budgetPlan">
      <header className="budgetPlanHeader">
        <h1 className="budgetPlanTitle">Detailed Budget Plan</h1>
        <p className="budgetPlanSubtitle">
          Explore your full income, expenses, savings, and debt breakdown.
        </p>
      </header>

      <section className="budgetChartsContainer">
        <article className="incomeChartContainer">
          <h2 className="chartHeader">Income Breakdown</h2>
          <IncomeChart />
        </article>
        <article className="expenseChartContainer">
          <h2 className="chartHeader">Expense Breakdown</h2>
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
    </main>
  );
}

export default BudgetPlan;
