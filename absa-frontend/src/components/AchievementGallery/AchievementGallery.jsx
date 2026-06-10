import React, { useContext } from "react";
import FinanceContext from "../../context/FinanceContext";
import "./AchievementGallery.css";

function AchievementGallery({ user }) {
  const {
    emergencyFund,
    tfsa,
    investments,
    offshorePercent,
    studentLoan,
    studentLoanOriginal,
    carLoan,
    carLoanOriginal,
    homeLoan,
    homeLoanOriginal,
    income,
    ra,
  } = useContext(FinanceContext);

  const totalDebtOriginal = studentLoanOriginal + carLoanOriginal + homeLoanOriginal;
  const totalDebtCurrent = studentLoan + carLoan + homeLoan;
  const debtPaidPercent =
    totalDebtOriginal > 0
      ? ((totalDebtOriginal - totalDebtCurrent) / totalDebtOriginal) * 100
      : 0;

  const achievements = [
    {
      title: "Emergency Fund Starter",
      description: "Saved your first R10,000 in emergency funds",
      unlocked: user ? emergencyFund >= 10000 : false,
      emoji: "💪",
    },
    {
      title: "RA Champion",
      description: "Contributing 10%+ to your Retirement Annuity",
      unlocked: user ? income > 0 && ra / income >= 0.1 : false,
      emoji: "🏆",
    },
    {
      title: "TFSA Explorer",
      description: "Opened and funded your Tax-Free Savings Account",
      unlocked: user ? tfsa > 0 : false,
      emoji: "🎯",
    },
    {
      title: "Debt Defeater",
      description: "Pay off 25% of your total debt",
      unlocked: user ? debtPaidPercent >= 25 : false,
      emoji: "⚔️",
    },
    {
      title: "Offshore Pioneer",
      description: "Allocate 10% of portfolio to offshore investments",
      unlocked: user ? offshorePercent >= 10 : false,
      emoji: "🌍",
    },
    {
      title: "Emergency Fund Master",
      description: "Save 6 months of expenses",
      unlocked: user ? emergencyFund >= (income / 2) * 6 : false,
      emoji: "🛡️",
    },
  ];

  return (
    <section className="achievementGalleryWrapper">
      <h2 className="achievementGalleryTitle">Achievement Gallery</h2>
      {!user && (
        <p className="achievementNotice">
          Explore the types of achievements you can unlock by saving, investing,
          and managing debt. Log in to see your personalized progress.
        </p>
      )}
      <section className="achievementGrid">
        {achievements.map((ach, index) => (
          <article
            key={index}
            className={`achievementCard ${ach.unlocked ? "unlocked" : "locked"}`}
          >
            <p className="emojiIcon">{ach.emoji}</p>
            <header>
              <h3>{ach.title}</h3>
            </header>
            <p className="description">{ach.description}</p>

            {ach.unlocked && user ? (
              <svg
                className="checkIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" fill="#2ecc71" />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#fff"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                className="lockIcon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" fill="#555" />
                <path
                  d="M9 11V9a3 3 0 016 0v2h1a1 1 0 011 1v5a1 1 0 01-1 1H8a1 1 0 01-1-1v-5a1 1 0 011-1h1z"
                  fill="#fff"
                />
              </svg>
            )}
          </article>
        ))}
      </section>
    </section>
  );
}

export default AchievementGallery;
