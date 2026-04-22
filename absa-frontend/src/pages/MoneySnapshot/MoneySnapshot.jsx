import React, {useContext} from "react";
import "./MoneySnapshot.css";

import MoneySnapshotCard from "../../components/MoneySnapshotCard/MoneySnapshotCard";
import CTACard from "../../components/ctaCard/ctaCard";
import FinanceContext from "../../context/FinanceContext";
import IncomeChart from "../../components/IncomeChart/IncomeChart";

function MoneySnapshot() {
    const {income, takeHome, savingsRate, totalDebt} = useContext(FinanceContext);
return (
    <main className="moneySnapshot">
        <header className="snapshotHeader">
            <h1 className="snapshotTitle">Money Snapshot</h1>
            <p className="snapshotSubtitle"> Your financial character sheet for March 2026</p>
        </header>

        <section className="financialStoryContainer">
            <h1 className="storyTitle">
                Your Financial Story
                </h1>
            <ul className="storyText">
            <li>You're building a strong foundation with 19.7% savings rate. However, your car is eating 21.3% of your take-home pay. Consider whether this aligns with your wealth building goals.</li>
            <li>Your RA contributions are tax-efficient at R3.5k/month, and you're making progress on your emergency fund.</li>
            </ul>
        </section>

        <section className="moneySnapshotCardContainer">

            <MoneySnapshotCard 
            title="Monthly Income"
            number={`R${income}`}
            subtitle="Before deductions"
            />

            <MoneySnapshotCard
            title="Take Home"
            number={`R${takeHome}`}
            subtitle="After tax & deductions"
            />

            <MoneySnapshotCard
            title="Savings Rate"
            number={`${savingsRate}%`}
            subtitle="Of take-home pay"
            />

            <MoneySnapshotCard
            title="Total Debt"
            number={`R${totalDebt}`}
            subtitle="Student + Car finance"
            />

        </section>
        <section className="moneySnapshotGraphs">
            <article className="incomeChartContainer">
                <h1 className="incomeChartHeader">
                    Income Breakdown
                </h1>
                <IncomeChart/>
            </article>
            <article className="expenseChartContainer">

            </article>
        </section>
        <section className="southAfricanTaxCard">
            {/* <SouthAfricanTaxCard/> */}
        </section>
        <section className="savingsAndDebtContainer">
            {/* <SavingsProgressCard/> */}
            {/* <DebtPayoffCard/> */}
        </section>
        <section className="RecentAchievementsContainer">
            {/* <RecentAchievements/> */}
        </section>

        <section className="ctaCardContainer">
        <CTACard
        title="Strategy Track"
        text="Select a strategy track for your 5 year journey."
        className="blueCard"
        />
        <CTACard
        title="Run Simulations"
        text="Test financial decisions with interactive scenarios."
        className="greenCard"
        />
        <CTACard
        title="Track Milestones"
        text="View your progress map and achievements."
        className="orangeCard"
        />
        </section>
    </main>
);
}

export default MoneySnapshot;