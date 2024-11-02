import React from "react";
import PageCarousel from "../components/PageCarousel";

class Speakers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "Organisers - ICITA Conference";
  }

  render() {
    const { data } = this.state;
    return (
      <div className="speakers">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <div className="section_subtitle">Key note</div>
                <div className="section_title">
                  <h1>Speakers</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row speakers_row">
            {/* <!-- Speaker --> */}
            <div className="col-xl-3 col-md-6"></div>
            <div className="col-xl-3 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/xiang.jpg")}
                    alt=""
                    width="240"
                    height="300"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#/speaker1" style={{ fontSize: "14px" }}>
                      Dr Xianzhi Wang
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker1" style={{ color: "white" }}>
                      {" "}
                      Senior Lecturer of School of Computer Science, University
                      of Technology Sydney, Ausralia
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Speaker --> */}
            {/* <div className="col-xl-3 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/David_tien1.jpg")}
                    alt=""
                    width="260"
                    height="270"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#/speaker2" style={{ fontSize: "14px" }}>
                      Dr.David Tien
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker2" style={{ color: "white" }}>
                      Charles Sturt University Australia
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-xl-3 col-md-6"></div>
          </div>
          <div className="row speakers_row">
            <div className="col-xl-2 col-md-2"></div>
            {/* <div className="col-xl-3 col-md-3">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/davide.jpg")}
                    alt=""
                    width="220"
                    height="260"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#/speaker3" style={{ fontSize: "14px" }}>
                      Dr. Davide Calandra
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker3" style={{ color: "white" }}>
                      University of Turin, Italy{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-3 col-md-3">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/raff.jpg")}
                    alt=""
                    width="210"
                    height="260"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#/speaker4" style={{ fontSize: "14px" }}>
                      Dr. Raffaele Di Fuccio
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker4" style={{ color: "white" }}>
                      Pegaso Telematic University, Italy{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-xl-3 col-md-3">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/img-comm/val.jpg")}
                    alt=""
                    width="210"
                    height="260"
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="#/speaker5" style={{ fontSize: "14px" }}>
                      Dr Valerio Brescia
                    </a>
                  </div>
                  <div className="speaker_title">
                    <a href="#/speaker5" style={{ color: "white" }}>
                      Assistant Professor, University of Turin, Italy{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Speakers;
