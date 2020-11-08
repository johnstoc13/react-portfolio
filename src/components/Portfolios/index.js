import React from "react";
import projects from "../../utils/projects";
import Project from "../Project";

function Portfolios(props) {

    return (
        <div className="row px-5">
            {projects.map(portfolioData => {
                    return (projects.indexOf(portfolioData),
                    <Project key={portfolioData.name.toString()} portfolioData={portfolioData} />
                    )
                })}
        </div>
    );
}

export default Portfolios;