import React from "react";
import "./style.css";

function Footer() {

    return (
        <footer className="footer-margin">
            <div className="navbar fixed-bottom navbar-dark bg-gray justify-content-center">
                <span className="navbar-brand footer-font blue align-middle">Copyright &copy;2020 | Chase Johnston</span>
                <span>
                    <i className="fab fa-github fa-lg blue pr-3" href="https://github.com/johnstoc13" target="_blank"></i>
                    <i className="fab fa-linkedin fa-lg blue pr-3" href="https://www.linkedin.com/in/chase-johnston8"
                        target="_blank"></i>
                    <i className="fas fa-envelope fa-lg blue" href="mailto:chasej@live.com" target="_blank"></i>
                </span>
            </div>
        </footer>
    );
}

export default Footer;