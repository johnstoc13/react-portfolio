import React from "react";
import { Col, Row, Container } from "../components/Grid";
import About from "../components/About";
import Skills from "../components/Skills";
// import imageSrc from "./images/chase.jpeg";

const Home = () => {
    return (
        <Container fluid>
            <About />
            <Skills />
        </Container>
    );
};

export default Home;