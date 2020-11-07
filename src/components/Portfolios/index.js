import React from "react";
import projects from "../../utils/projects";
import Project from "../Project";
import "./style.css";

function Portfolios(props) {

    return (
        <div className="row px-5">
            {projects.map(portfolioData => {
                    console.log(portfolioData);

                    return (projects.indexOf(portfolioData),
                    <Project key={portfolioData.name.toString()} portfolioData={portfolioData} />
                    )
                })}
        </div>
    );
}

export default Portfolios;