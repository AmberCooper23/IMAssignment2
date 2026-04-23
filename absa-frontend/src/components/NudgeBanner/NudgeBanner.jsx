import React from "react";
import "./NudgeBanner.css";

const icons = {
    warning: "🚨",
    info: "💡",
    success: "🎉",
};

function NudgeBanner({ message, type = "warning" }) {
    const modifier = type.charAt(0).toUpperCase() + type.slice(1);
    return (
        <aside className={`nudgeBanner nudgeBanner${modifier}`}>
            <p className="nudgeBannerIcon">{icons[type]}</p>
            <p className="nudgeBannerText">{message}</p>
        </aside>
    );
}

export default NudgeBanner;
