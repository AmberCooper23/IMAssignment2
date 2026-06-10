import React from "react";
import "./FeatureCard.css";

function FeatureCard({ title, description, items, className }) {
  return (
    <article className={`featureCard ${className || ""}`}>
      <h3 className="featureTitle">{title}</h3>
      <p className="featureDescription">{description}</p>
      <ul className="featureList">
        {items.map((item, index) => (
          <li key={index} className="featureListItem">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default FeatureCard;
