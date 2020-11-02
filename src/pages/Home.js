import React from "react";
import { Container } from "../components/Grid";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <Container fluid>
            <About />
            <Skills />
        </Container>
    );
};

export default Home;