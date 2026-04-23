import React from "react";
import CTACard from "../../components/ctaCard/ctaCard";
import StrategyTrackCard from "../../components/StrategyTrackCard/StrategyTrackCard";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";

import "./StrategyTrack.css";

function StrategyTrack() {
    return (
        <main className="strategyTrack">
        <header className="strategyTrackHeader">
            <h1 className="strategyTrackTitle">Strategy Track</h1>
            <p className="strategyTrackSubtitle">
                Choose your financial archetype and follow a curated 5 year plan
            </p>
        </header>

        <section className="chooseJourney">
            <h1 className="chooseJourneyTitle">
                Choose Your Journey
            </h1>
            <ul className="chooseJourneyText">
            <li>
                Each track is designed for different financial goals and priorities. Select the one that resonates with your current situation and aspirations. You can switch tracks anytime as your priorities evolve.
            </li>
            </ul>
        </section>

        <section className="trackCardContainer">
            <StrategyTrackCard
            strategyTrack="First Property Path"
            archetype="The Builder"
            description="Focus on saving for property deposit and building credit for bond approval"
            priorities={[
                "Save for deposit",
                "Building credit",
                "Minimising lifestyle creep"
            ]}
            milestones={[
                "Emergency Fund",
                "Deposit Ready",
                "Bond Approval"
            ]}
            className="blueStratCard"
            to="/tracks/first-property"
            />
            <StrategyTrackCard
            strategyTrack="Balanced Lifestyle & Investing"
            archetype="The Explorer"
            description="Balance lifestyle enjoyment with steady local investments and offshore diversification"
            priorities={[
                "Lifestyle balance",
                "Local investments",
                "Gradual offshore allocation"
            ]}
            milestones={[
                "RA Contributions",
                "Balanced Portfolio",
                "Offshore Start"
            ]}
            className="greenStratCard"
            />
            <StrategyTrackCard
            strategyTrack="Aggressive Global Investor"
            archetype="The Maverick"
            description="Maximise offshore exposure and tech stocks for long term wealth building"
            priorities={[
                "Offshore ETFs",
                "Tech stocks",
                "Aggressive growth"
            ]}
            milestones={[
                "Max RA",
                "Offshore Allocation",
                "Tech Exposure"
            ]}
            className="orangeStratCard"
            />

        </section>

        <section className="trackComparisonContainer">
            
            <ComparisonTable/>
        </section>

        
        </main>
    );
}

export default StrategyTrack;