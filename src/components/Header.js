import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  //Tweet
  TweetMe(e, text) {
    //Todo: bitly API integration
    // var url = fetch("/bitly/shorten?id=" + id, function (href) {
    //   href = href || "https://www.tripdatabase.com/Document/" + id;
    // });
    var url = "https://www.icita.world/";
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        text.substring(0, 100) +
        "  " +
        url +
        "&via=icitaworld",
      "",
      "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"
    );
    e.preventDefault();
  }
  // function  activeClas (route) {
  //     return window.location.pathname === route ? "active" : null;
  //   };
  render() {
    const activeClass = this.props.activeClass;
    return (
      <header className="header">
        <nav className="navbar navbar-dark navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="logo">
            <a href="#">
              <span>
                ICITA<span>2023</span>
              </span>
              <span>Conference</span>
            </a>
          </div>

          <div
            className="collapse navbar-collapse navbar navbarNav"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className={activeClass("/Home")}>
                <Link to="/">Home</Link>
              </li>

              <li className={activeClass("/previousconferences")}>
                <Link to="/previousconferences">Previous Conferences</Link>
              </li>

              <li className={activeClass("/technicalcommittee")}>
                <Link to="/technicalcommittee">Committee</Link>
              </li>
              <li className={activeClass("/organizers")}>
                <Link to="/organizers">Organisers</Link>
              </li>
              <li className={activeClass("/importantdates")}>
                <Link to="/importantdates">Important Dates</Link>
              </li>
              <li
                className={activeClass("/callforpapers")}
                className="has_children"
              >
                <a href="#/callforpapers">Tracks</a>
                <ul>
                  <li>
                    <Link to="/callforpapers">Call for Papers</Link>
                  </li>
                  <li>
                    <Link to="/callforworkshop">
                      Call for Workshops/Special sessions
                    </Link>
                  </li>
                  <li>
                    <Link to="/submissions">Submissions</Link>
                  </li>
                  <li>
                    <Link to="/registration">Registration</Link>
                  </li>
                </ul>
              </li>
              <li className="has_children">
                <a href="/program">Schedule</a>
                <ul>
                  <li>
                    <Link to="/program">Programme Schedule</Link>
                  </li>
                  <li>
                    <Link to="/speakers">Speakers</Link>
                  </li>
                  <li>
                    <Link to="/venue">Venue</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </li>
              {/* <li className="has_children">
                <a href="/IKIT">Workshops</a>
                <ul>
                  <li>
                    <a href="https://www.ikit.info/" target="_blank">
                      IKIT 2021
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>

            <div className="header_right ml-auto d-flex flex-row align-items-center justify-content-start">
              <div className="social">
                <ul className="d-flex flex-row align-items-center justify-content-start">
                  <li>
                    <a
                      href="#"
                      onClick={(e) =>
                        this.TweetMe(
                          e,
                          "ICITA 2021: Join us on 13-14 November, Knowledge Park, Dubai, UAE"
                        )
                      }
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://facebook.com/ICITA-Conference-101598691654233"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {/* <div className="header_content d-flex flex-row align-items-center justify-content-start">
          <div className="logo">
            <a href="#">
              <span>
                ICITA<span>2021</span>
              </span>
              <span>conference</span>
            </a>
          </div>

          <nav className="main_nav">
            <ul className="d-flex flex-row align-items-center justify-content-start">
              <li className="active">
                <a href="index.html">Home</a> */}
      </header>
    );
  }
}

export default Header;
