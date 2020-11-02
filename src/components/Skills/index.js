import React from "react";
import "./style.css";

function Skills() {

    return (
        <div class="row pt-3">
            <div class="col-sm-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                <i class="fas fa-laptop-code fa-3x blue pb-2"></i>
                <h3 class="blue text-center pb-2">TECHNICAL SKILLS</h3>
                <ul class="fa-ul">
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>HTML / CSS</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Bootstrap</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Javascript / jQuery</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Node.js</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>JSON</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>AJAX</li>
                </ul>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 d-flex flex-column align-items-center">
                <i class="fas fa-users fa-3x blue pb-2"></i>
                <h3 class="blue text-center pb-2">PERSONAL SKILLS</h3>
                <ul class="fa-ul">
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Teamwork</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Problem Solving</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Multitasking</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Professionalism</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Leading Change</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Communication</li>
                </ul>
            </div>
            <div class="col-sm-12 col-lg-4 pt-md-3 pt-lg-0 d-flex flex-column align-items-center">
                <i class="fas fa-plane-departure fa-3x blue pb-2"></i>
                <h3 class="blue text-center pb-2">HOBBIES & INTERESTS</h3>
                <ul class="fa-ul">
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>My Family</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Web Design</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Camping</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Boating</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Traveling</li>
                    <li><span class="fa-li"><i class="far fa-check-circle"></i></span>Home Renovations</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;