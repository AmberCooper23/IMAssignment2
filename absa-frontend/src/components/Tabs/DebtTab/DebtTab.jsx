import React from "react";
import DebtPayoffCard from "../../../components/DebtPayoffCard/DebtPayoffCard";
import "./DebtTab.css";
function DebtTab({ disabled }) {
  return (
    <section className={`savingsAndDebtContainer ${disabled ? "disabled" : ""}`}>
      <DebtPayoffCard disabled={disabled} />
    </section>
  );
}
export default DebtTab;
