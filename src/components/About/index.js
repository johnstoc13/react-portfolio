import React from "react";
import "./style.css";
import imageSrc from "../../images/chase.jpeg";

function About() {

    return (
        <div class="row py-5 bg-gray">
            <div class="col-md-1"></div>
            <div class="col-sm-12 col-md-5 d-flex justify-content-center">
                <img src={imageSrc} alt="Chase Johnston" class="rounded aboutimg" />
            </div>
            <div class="col-sm-12 col-md-5 d-flex flex-column align-items-center">
                <div class="row">
                    <h2 class="text-white">WEB DEVELOPER</h2>
                </div>
                <div class="row">
                    <p class="text-white text-center px-2">Website designer and multiple business owner with experience
                        creating modern, responsive websites for small businesses and leading positive change for
                        teenagers and young adults. Extensive experience in multitasking, teamwork, communication and
                        problem solving in a fast paced learning environment as an air traffic controller. With my
                        accomplishments in experience, efficiency, and teamwork, I have proven success repeatedly and
                        look forward to using these skills in future endeavors.</p>
                </div>
                <div class="container">
                    <div class="row pt-3">
                        <div class="col-4 text-center">
                            <a class="fab fa-github-square fa-3x text-white" href="https://github.com/johnstoc13"
                                target="_blank"></a>
                            <p class="text-white mb-0">GitHub</p>
                        </div>
                        <div class="col-4 text-center">
                            <a class="fab fa-linkedin fa-3x text-white"
                                href="https://www.linkedin.com/in/chase-johnston8" target="_blank"></a>
                            <p class="text-white mb-0">LinkedIn</p>
                        </div>
                        <div class="col-4 text-center">
                            <a class="fas fa-file-pdf fa-3x text-white" href="./assets/docs/Resume.pdf" target="_blank"></a>
                            <p class="text-white mb-0">Resume</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    );
}

export default About;