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
                    <NavLink to="/moneySnapshot" className="navItem">Money Snapshot</NavLink>
                </li>
                <li>
                    <NavLink to="/strategyTrack" className="navItem">Strategy Track</NavLink>
                </li>
                <li>
                    <NavLink to="/simulationLab" className="navItem">Simulation Lab</NavLink>
                </li>
                <li>
                    <NavLink to="/progressMap" className="navItem">Progress Map</NavLink>
                </li>
            </ul>

            <button className="loginButton">@ Amberr</button>
        </nav>
    );
}

export default NavBar;