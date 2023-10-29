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
import CallForworkshop from "./pages/CallForWorkshop";
import CallForSession from "./pages/Callforsession";
import Invitation from "./pages/Invitation";
import PageCarousel from "./components/PageCarousel";
import TechnicalCommittee from "./pages/TechnicalCommittee";
import Organizers from "./pages/Organizers";
import PreviousConferences from "./pages/PreviousConferences";
import ImportantDates from "./pages/Importantdates";
import Speakers from "./pages/Speakers";
import Speaker1 from "./pages/Speaker1";
import Speaker2 from "./pages/Speaker2";
import Speaker3 from "./pages/Speaker3";
import Speaker4 from "./pages/Speaker4";
import Speaker5 from "./pages/Speaker5";
import Camera from "./pages/Camera";
import Venue from "./pages/Venue";
import Program from "./pages/Program";
import Submission from "./pages/Submission";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import IKIT from "./pages/IKIT";

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

class RouterNav extends React.Component {
  render() {
    const activeClass = (route) => {
      return window.location.pathname === route ? "active" : null;
    };

    return (
      <Router>
        <Header activeClass={activeClass} />
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/callforpapers">
            <PageCarousel title="Call For Papers" />
            <CallForPapers />
          </Route>
          <Route path="/registration">
            <PageCarousel title="Registration" />
            <Registration />
          </Route>
          <Route path="/callforworkshop">
            <PageCarousel title="Call For Workshop" />
            <CallForworkshop />
          </Route>
          <Route path="/callforsession">
            <PageCarousel title="Call For Session" />
            <CallForSession />
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
            <PageCarousel title="Organisers" />

            <Organizers />
          </Route>
          <Route path="/invitation">
            <PageCarousel title="Invitation" />

            <Invitation />
          </Route>
          <Route path="/camera">
            <PageCarousel title="Camera Ready Paper Guidelines" />

            <Camera />
          </Route>
          <Route path="/IKIT">
            <PageCarousel
              title="7th International Workshop on Information and Knowledge in Internet of Things"
              prefix="IKIT-2023"
            />
            <IKIT />
          </Route>
          <Route path="/importantdates">
            <PageCarousel title="Important Dates" />

            <ImportantDates />
          </Route>
          <Route path="/speakers">
            <PageCarousel title="Speakers" />
            <Speakers />
          </Route>
          <Route path="/speaker1">
            <PageCarousel title="Prof. Alvaro Roca" />
            <Speaker1 />
          </Route>
          <Route path="/speaker2">
            <PageCarousel title="Dr David Tien" />
            <Speaker2 />
          </Route>
          <Route path="/speaker3">
            <PageCarousel title="Dr Davide Calandra" />
            <Speaker3 />
          </Route>
          <Route path="/speaker4">
            <PageCarousel title="Dr. Raffaele Di Fuccio" />
            <Speaker4 />
          </Route>
          <Route path="/speaker5">
            <PageCarousel title="Dr Valerio Brescia" />
            <Speaker5 />
          </Route>
          <Route path="/program">
            <PageCarousel title="Programme" />
            <Program />
          </Route>
          <Route path="/contact">
            <PageCarousel title="Contact Us" />
            <Contact />
          </Route>
          <Route path="/venue">
            <PageCarousel title="Venue" />
            <Venue />
          </Route>
          <Route path="/submissions">
            <PageCarousel title="Submissions" />
            <Submission />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    );
  }
}

export default RouterNav;
