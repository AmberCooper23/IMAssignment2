import React from "react";
// import Navbar from "../../components/NavBar/NavBar";
import "./LandingPage.css";

// Image Imports
import heroImage from "../../assets/sunsetCity.png";
import contextImage from "../../assets/apartmentView.png";

function LandingPage() {
  return (
    <main>
    {/* <Navbar /> */}

    <header className="hero">
    <section>
        <p className="preHeroText">Built for South African Young Professionals</p>
        <h1 className="heroTitle">Design Your First Five Years of Wealth</h1>
        <p className="heroSubtitle"> A gamified, narrative driven companion to help you navigate property, investments, and lifestyle choices with confidence.</p>
        <button className="ctaButton">Begin your journey!</button>

        <ul className="criteria">
            <li>
                <h4 className="criteriaTitle">R70k </h4>
                <p className="criteriaSubtitle">Avg. Monthly Income</p>
            </li>
            <li>
                <h4 className="criteriaTitle">23-35 </h4>
                <p className="criteriaSubtitle">Age Range</p>
            </li>
            <li>
                <h4 className="criteriaTitle">5 Years</h4>
                <p className="criteriaSubtitle">Your Plan</p>
            </li>
        </ul>
    </section>
        

        <figure className="heroImage">
            <img src={heroImage} alt="Rooftop view of buildings in Johannesburg during a sunset, orange sky." />
        </figure>
    </header>

    <h2 className="bannerTitle">
        Your Wealth-Building Journey
    </h2>
    <p className="bannerText">
        Transform finance from overwhelming to engaging with our three core pillars!
    </p>

    <section className="featureSection">
        {/* <FeatureCard /> */}
        {/* <FeatureCard /> */}
        {/* <FeatureCard /> */}        
    </section>

    <section className="contextSection">
        <figure className="contextImage">
            <img src={contextImage}alt="View looking out of the window of an apartment, overlooking the city during the day, seeing a busy road. Surrounding buildings look luxurious and modern."></img>
        </figure>
        <section className="contextContent">

        <h1 className="contextTitle">
            Built for South African Realities
            </h1>
        <p className="contextText">
            From SARS tax brackets to TFSA limits, property markets in JHB and CPT, to offshore investment controls - we speak your language. 
        </p>
        <ul className="contextCriteria">
            <li className="contextCriteriaContainer">
                <h4 className="contextCriteriaTitle">SARS Tax Optimised</h4>
                <p className="contextCriteriaSubtitle">RA & medical aid benefits</p>
            </li>
            <li className="contextCriteriaContainer">
                <h4 className="contextCriteriaTitle">TFSA Tracking</h4>
                <p className="contextCriteriaSubtitle">R36k annual, R500k lifetime</p>
            </li>
        </ul>
        <ul className="contextCriteria">
            <li className="contextCriteriaContainer">
                <h4 className="contextCriteriaTitle">Property Markets</h4>
                <p className="contextCriteriaSubtitle">JHB & CPT specific data</p>
            </li>
            <li className="contextCriteriaContainer">
                <h4 className="contextCriteriaTitle">Offshore Limits</h4>
                <p className="contextCriteriaSubtitle">Exchange control guidance</p>
            </li>
        </ul>
        </section>
    </section>

    <section className="ctaFooter">
        <h1 className="ctaFooterTitle">
            Start Building Your Wealth Story Today!
        </h1>
        <p className="ctaFooterText">
            Join thousands of young South African professionals taking control of their financial future.
        </p>
        <button className="ctaFooterButton">Begin Your Journey!</button>
    </section>

    <footer className="footer">
    {/* <Logo/> */}
    <p className="footerText">© 2026 ABSA. Your Story Matters. </p>
    </footer>
    </main>
  );
}

export default LandingPage;