import React from "react";
import TaxBenefitsSummary from "../../../components/SouthAfricanTaxCard/SouthAfricanTaxCard";
import CTACard from "../../../components/ctaCard/ctaCard";
import "./GoalsTab.css";

function GoalsTab() {
  return (
    <>
      <section className="southAfricanTaxCard">
        <article className="southAfricanTaxCardContainer">
          <h2 className="southAfricanTaxCardHeader">
            South African Tax & Benefits
          </h2>
          <TaxBenefitsSummary />
        </article>
      </section>

      <section className="ctaCardContainer">
        <CTACard
          title="Track Milestones"
          text="View your progress map and achievements."
          className="orangeCard"
          to="/progressMap"
        />
        <CTACard
          title="Run Simulations"
          text="Test financial decisions with interactive scenarios."
          className="greenCard"
          to="/simulationLab"
        />
      </section>
    </>
  );
}

export default GoalsTab;
