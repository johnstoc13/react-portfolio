import React from "react";
import "./style.css";
import imageSrc from "../../assets/images/chase.jpeg";
import Pdf from "../../assets/docs/resume.pdf";

function About() {

    return (
        <div className="row py-5 bg-gray">
            <div className="col-md-1"></div>
            <div className="col-sm-12 col-md-5 d-flex justify-content-center">
                <img src={imageSrc} alt="Chase Johnston" className="rounded aboutimg" />
            </div>
            <div className="col-sm-12 col-md-5 d-flex flex-column align-items-center">
                <div className="row">
                    <h3 className="text-white">WEB DEVELOPER</h3>
                </div>
                <div className="row">
                    <p className="text-white text-center px-2">Website designer and multiple business owner with experience
                        creating modern, responsive websites for small businesses and leading positive change for
                        teenagers and young adults. Extensive experience in multitasking, teamwork, communication and
                        problem solving in a fast paced learning environment as an air traffic controller. With my
                        accomplishments in experience, efficiency, and teamwork, I have proven success repeatedly and
                        look forward to using these skills in future endeavors.</p>
                </div>
                <div className="container">
                    <div className="row pt-3">
                        <div className="col-4 text-center">
                            <a className="fab fa-github-square fa-4x text-white" href="https://github.com/johnstoc13"
                                target="_blank"></a>
                            <p className="text-white mb-0">GitHub</p>
                        </div>
                        <div className="col-4 text-center">
                            <a className="fab fa-linkedin fa-4x text-white"
                                href="https://www.linkedin.com/in/chase-johnston8" target="_blank"></a>
                            <p className="text-white mb-0">LinkedIn</p>
                        </div>
                        <div className="col-4 text-center">
                            <a className="fas fa-file-pdf fa-4x text-white" href= {Pdf} target="_blank"></a>
                            <p className="text-white mb-0">Resume</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-1"></div>
        </div>
    );
}

export default About;