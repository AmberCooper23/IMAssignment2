import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import "./SouthAfricanTaxCard.css";

function TaxBenefitsSummary() {
  const { income, tax, ra, medicalAid } = useContext(FinanceContext);

  const items = [
    {
      title: "SARS Tax (Monthly)",
      value: tax,
      color: "#d9534f",
      note: `${((tax / income) * 100).toFixed(1)}% of income`
    },
    {
      title: "RA Contribution",
      value: ra,
      color: "#5cb85c",
      note: "Tax deductible under SARS rules"
    },
    {
      title: "Medical Aid",
      value: medicalAid,
      color: "#5bc0de",
      note: "Potential tax credits depending on plan and dependents"
    }
  ];

  return (
    <section className="taxBenefitsWrapper">
      {items.map((item, index) => {
        const percent = income > 0 ? (item.value / income) * 100 : 0;
        return (
          <article key={index} className="taxBenefitItem">
            <header>
              <h3>{item.title}</h3>
              <p><strong>R{item.value}</strong></p>
            </header>
            <progress
              value={percent}
              max="100"
              style={{ accentColor: item.color }}
            >
              {percent}%
            </progress>
            <p className="note">{item.note}</p>
          </article>
        );
      })}
    </section>
  );
}

export default TaxBenefitsSummary;
