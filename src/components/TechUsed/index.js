import React from "react";

function TechUsed(props) {
    const techUsedArray = props.portfolioData.techUsed;
    const listItems = techUsedArray.map((tech) =>
        <li>{tech}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

export default TechUsed;