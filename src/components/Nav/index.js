import React from "react";
import "./style.css";

function Nav() {

    return (
        <nav className="container-fluid bg-blue border-bottom border-dark">
            <div className="row">
                <div className="col-md-6 mt-sm-2 mt-md-0 d-flex justify-content-center align-items-center">
                    <span class="h1 mb-0 text-white">CHASE JOHNSTON</span>
                </div>
                <div className="col-md-6 my-md-2">
                    <ul class="navbar-nav flex-row justify-content-md-end justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link text-white px-2 mx-2" href="/">About <span
                                class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50 px-3 py-0 mt-2 border-left border-right"
                                href="/portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white-50 px-2 mx-2" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;