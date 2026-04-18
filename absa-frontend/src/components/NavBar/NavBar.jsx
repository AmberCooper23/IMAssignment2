import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="navBar">
            <ul className="navLinks">
                <li>
                    <NavLink to="/" className="navItem">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/MoneySnapshot" className="navItem">Money Snapshot</NavLink>
                </li>
                <li>
                    <NavLink to="/StrategyTracks" className="navItem">Strategy Tracks</NavLink>
                </li>
                <li>
                    <NavLink to="/SimulationLab" className="navItem">Simulation Lab</NavLink>
                </li>
                <li>
                    <NavLink to="/ProgressMap" className="navItem">Progress Map</NavLink>
                </li>
            </ul>

            <button className="loginButton">Login</button>
        </nav>
    );
}

export default NavBar;