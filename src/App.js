import React from "react";
import logo from "./assets/logo-small.png";

import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-bootstrap/Carousel";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallForPapers from "./pages/CallForPapers";
import Introduction from "./pages/Introduction";
import PageCarousel from "./components/PageCarousel";
import TechnicalCommittee from "./pages/TechnicalCommittee";
import Organizers from "./pages/Organizers";
import PreviousConferences from "./pages/PreviousConferences";
import PreviousListings from "./pages/PreviousListings";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

window.$strapiLink = "http://localhost:1337/organizers";

class RouterNav extends React.Component {
  render() {
    const activeClass = (route) => {
      return window.location.pathname === route ? "active" : null;
    };

    return (
      <Router>
        <Header activeClass={activeClass} />
        <Switch>
          <Route exact path="/Home" component={Home}>
            <Home />
          </Route>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/callforpapers">
            <PageCarousel title="Call For Papers" />
            <CallForPapers />
          </Route>

          <Route path="/previousconferences">
            <PageCarousel title="Previous Conferences" />
            <PreviousConferences />
          </Route>
          <Route path="/technicalcommittee">
            <PageCarousel title="Technical Committee" />

            <TechnicalCommittee />
          </Route>
          <Route path="/organizers">
            <PageCarousel title="Organizers" />

            <Organizers />
          </Route>
          <Route path="/previouslistings">
            <PageCarousel title="Previous Listings" />

            <PreviousListings />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}

export default RouterNav;
