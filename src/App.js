import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import { StoreProvider } from "./utils/GlobalState";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <Switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        {/* <Route exact path="/contact" component={Contact} /> */}
        {/* </Switch> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
