import React from "react";
import "./ctaCard.css";

function CTACard({title, text, className}) {
    return (
<article className={`ctaCard ${className}`}>
    <h1 className="ctaTitle">{title}</h1>
    <p className="ctaText">{text}</p>
</article>
    );
}

export default CTACard;