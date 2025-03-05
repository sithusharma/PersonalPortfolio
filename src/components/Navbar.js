import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FiMenu, FiX } from "react-icons/fi"; // Modern icons

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false); // Collapse navbar on route change
    }, [location]);

    const isActive = (path) => location.pathname === path ? "active-link" : "";

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar((prev) => !prev)}>
                    {expandNavbar ? <FiX size={28} /> : <FiMenu size={28} />}
                </button>
            </div>
            <div className="links">
                <Link to="/" className={isActive("/")}>Home</Link>
                <Link to="/about" className={isActive("/about")}>About</Link>
                <Link to="/skills" className={isActive("/")}>Skills</Link>
                <Link to="/projects" className={isActive("/projects")}>Projects</Link>
                <Link to="/experiences" className={isActive("/experiences")}>Experiences</Link>
                <Link to="/contact" className={isActive("/contact")}>Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
