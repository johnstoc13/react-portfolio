import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Nav() {

    return (
        <nav className="container-fluid bg-blue border-bottom border-dark">
            <div className="row py-1">
                <div className="col-md-6 mt-sm-2 mt-md-0 d-flex justify-content-center align-items-center">
                    <span className="h1 mb-0 text-white">CHASE JOHNSTON</span>
                </div>
                <div className="col-md-6 my-md-2">
                    <ul className="navbar-nav flex-row justify-content-md-end justify-content-center">
                        <li className="nav-item px-2 mt-1 mx-2">
                            <NavLink to="/react-portfolio/home" className={window.location.pathname === "/" || window.location.pathname === "/react-portfolio/home" ? "nav-link active hover-orange" : "nav-link hover-orange"}>ABOUT</NavLink>
                            {/* <a className="nav-link text-white px-2 mx-2" href="/">ABOUT</a> */}
                        </li>
                        <li className="nav-item px-3 py-0 mt-1 border-left border-right">
                            <NavLink to="/react-portfolio/portfolio" className={window.location.pathname === "/react-portfolio/portfolio" ? "nav-link active hover-orange" : "nav-link hover-orange"}>PORTFOLIO</NavLink>
                            {/* <a className="nav-link text-white px-3 py-0 mt-2 border-left border-right"
                                href="/portfolio">PORTFOLIO</a> */}
                        </li>
                        <li className="nav-item px-2 mt-1 mx-2">
                            <NavLink to="/react-portfolio/contact" className={window.location.pathname === "/react-portfolio/contact" ? "nav-link active hover-orange" : "nav-link hover-orange"}>CONTACT</NavLink>
                            {/* <a className="nav-link text-white px-2 mx-2" href="/contact">CONTACT</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;