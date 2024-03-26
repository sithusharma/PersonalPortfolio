import React from 'react'
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';
import { useEffect, useState } from "react";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
  return (
    <div className="navbar" id ={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button 
                onClick={() => {
                    setExpandNavbar((prev) => !prev);
                    }}>
                <ReorderIcon/>
            </button>

        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experiences">Experiences</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/video">Video Project</Link>

        </div>
    </div>
  )
}

export default Navbar;