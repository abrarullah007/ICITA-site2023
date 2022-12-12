import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 footer_col">
                <div className="logo">
                  <a href="#">
                    <span>
                      ICITA<span>2023</span>
                    </span>
                    <span>CONFERENCE</span>
                  </a>
                </div>
                <div className="footer_text">
                  <p>To sponsor the event, contact chair@icita.world</p>
                </div>
                <div className="social footer_social">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 footer_col">
                <div className="footer_column">
                  <div className="footer_title">Proceedings</div>
                  <div className="footer_text">
                    <a
                      href="https://www.springer.com/series/15179"
                      target="_blank"
                    >
                      {" "}
                      <img
                        src={require("../assets/springerlink.jpg")}
                        width="230"
                        height="auto"
                      />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 footer_col">
                <div className="footer_column">
                  <div className="footer_title">Sponsors</div>
                  <div className="footer_text">
                    <a href="http://www.hw.ac.uk" target="_blank">
                      <img
                        src={require("../assets/previous/hw.png")}
                        alt="Heriot Watt University"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 footer_col">
                {/* <div className="footer_column">
                  <div className="footer_title">Sponsors</div>
                  <div className="footer_text">
                    <a href="https://www.iscte-iul.pt/" target="_blank">
                      <img
                        src={require("../assets/iscte.PNG")}
                        alt="University of ISCTE, Lisbon"
                      />
                    </a>
                    <br /> <br />
                    <a
                      className="colorbox"
                      href="https://www.mdpi.com/journal/education"
                    >
                      <img src={require("../assets/education.PNG")} alt="" />
                    </a>
                  </div>
                </div> */}
              </div>

              {/* <div className="col-lg-3 footer_col">
                <div className="footer_column">
                  <div className="footer_title">Sponsors</div>
                  <div className="gallery d-flex flex-row align-items-start justify-content-between flex-wrap">
                    <div className="gallery_item">
                      <a
                        className="footer_title"
                        href="https://www.iscte-iul.pt/"
                      >
                        <img
                          style={{ background: "white" }}
                          // width="230"
                          // height="60"
                          src={require("../assets/iscte.PNG")}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footer_bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_bar_content d-flex flex-row align-items-center justify-content-start">
                  <div className="copyright">
                    Copyright ICITA&copy; 2002-
                    {new Date().getFullYear()} All rights reserved | Credit{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
