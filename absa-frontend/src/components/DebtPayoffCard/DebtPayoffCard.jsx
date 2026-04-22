import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import GoalsContext from "../../context/GoalsContext";
import "./DebtPayoffCard.css";

function DebtPayoffCard() {
  const {
    studentLoan,
    studentLoanOriginal,
    studentLoanPayment,
    carLoan,
    carLoanOriginal,
    carLoanPayment,
    homeLoan,
    homeLoanOriginal,
    homeLoanPayment,
    takeHome
  } = useContext(FinanceContext);

  const { goalDebtFreeYear, yearsUntilDebtFree } = useContext(GoalsContext);

  const debts = [
  {
    title: "Student Loan",
    current: studentLoan,
    original: studentLoanOriginal,
    progress:
      studentLoanOriginal > 0
        ? ((studentLoanOriginal - studentLoan) / studentLoanOriginal) * 100
        : 0,
    color: "#e74c3c",
    note: `Remaining balance R${studentLoan}, Monthly payment R${studentLoanPayment}`
  },
  {
    title: "Car Finance",
    current: carLoan,
    original: carLoanOriginal,
    progress:
      carLoanOriginal > 0
        ? ((carLoanOriginal - carLoan) / carLoanOriginal) * 100
        : 0,
    color: "#f39c12",
    note: `Remaining balance R${carLoan}, Monthly payment R${carLoanPayment}`
  },
  {
    title: "Home Loan",
    current: homeLoan,
    original: homeLoanOriginal,
    progress:
      homeLoanOriginal > 0
        ? ((homeLoanOriginal - homeLoan) / homeLoanOriginal) * 100
        : 0,
    color: "#3498db",
    note: `Remaining balance R${homeLoan}, Monthly payment R${homeLoanPayment}`
  }
];


  const lifestyleAlert =
    carLoanPayment > 0 && takeHome > 0
      ? (carLoanPayment / takeHome) * 100
      : null;

  return (
    <section className="debtPayoffWrapper">
      <h2 className="debtPayoffTitle">Debt Payoff</h2>
      {debts.map((debt, index) => (
        <article key={index} className="debtItem">
          <header>
            <h3>{debt.title}</h3>
            <p><strong>{debt.current === 0 ? "Debt Free" : `R${debt.current}`}</strong></p>
          </header>
          <progress
            value={debt.progress}
            max="100"
            style={{ accentColor: debt.color }}
          >
            {debt.progress}%
          </progress>
          <p className="note">{debt.current === 0
        ? "Congratulations, this debt is fully paid off!"
        : debt.note}</p>
        </article>
      ))}
      {lifestyleAlert && lifestyleAlert > 20 && (
        <div className="alertBox">
          <strong>Lifestyle Creep Alert!</strong>
          <p>
            Your car repayment is {lifestyleAlert.toFixed(1)}% of take-home.
            Consider trading down to accelerate wealth building.
          </p>
        </div>
      )}
      {goalDebtFreeYear > 0 && (
        <p className="debtFreeNote">
          Projected debt-free year: {goalDebtFreeYear} (
          {yearsUntilDebtFree} years away)
        </p>
      )}
    </section>
  );
}

export default DebtPayoffCard;
