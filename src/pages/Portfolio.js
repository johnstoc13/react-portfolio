import React from "react";
import { Container } from "../components/Grid";
import Portfolios from "../components/Portfolios";
import PortfolioHeader from "../components/Headers";

const Portfolio = () => {
    return (
        <Container fluid>
            <PortfolioHeader />
            <Portfolios />
        </Container>
    );
};

export default Portfolio;