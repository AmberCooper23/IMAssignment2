import React from "react";
// import "./MoneyShapshot.css";

function MoneySnapshot() {
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
            <p className="storyText">
                "You're building a strong foundation with 19.7% savings rate. However, your car is eating 21.3% of your take-home pay. Consider whether this aligns with your wealth building goals."
            </p>
            <p className="storyText">
                "Your RA contributions are tax-efficient at R3.5k/month, and you're making progress on your emergency fund."
            </p>
        </section>

        <section className="moneySnapshotCardContainer">
            {/* <MoneySnapshotCard/>
            <MoneySnapshotCard/>
            <MoneySnapshotCard/>
            <MoneySnapshotCard/> */}
        </section>
        <section className="moneySnapshotGraphs">
            {/* <MoneySnapshotGraph/>
            <MoneySnapshotGraph/> */}
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
        <section className="ctaCards">
            <article className="ctaStrategyTrack">
                <h1 className="ctaTitle">Strategy Track</h1>
                <p className="ctaText">
                    Select a strategy track for your 5 year journey.
                </p>
            </article>
            <article className="ctaSimulations">
                <h1 className="ctaTitle">Run Simulations</h1>
                <p className="ctaText">
                    "Test financial decisions with interactive scenarios."
                </p>
            </article>
            <article className="ctaProgressMap">
                <h1 className="ctaTitle">Track Milestones</h1>
                <p className="ctaText">
                    View your progress map and achievements.
                </p>            
            </article>
        </section>
    </main>
);
}

export default MoneySnapshot;