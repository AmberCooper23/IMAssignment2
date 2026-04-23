import React from "react";
import {NavLink} from "react-router-dom";
import "./ctaCard.css";

function CTACard({title, text, className, to}) {
    return (
<NavLink to={to} className={`ctaCard ${className}`}>
    <h1 className="ctaTitle">{title}</h1>
    <p className="ctaText">{text}</p>
</NavLink>
    );
}

export default CTACard;