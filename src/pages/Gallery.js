import React from "react";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Organisers - 17th International Conference on Information Technology and Applications (ICITA)";
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title_container text-center">
                  <div className="section_title">
                    <h1>Organisers</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Honorary Chair</h4>
                      <img
                        src={require("../assets/img-comm/David_tien.jpg")}
                        alt=""
                        width="280"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>David Tien</b>
                        <br /> IEEE Computer Society Asia-Pacific Area
                        Coordinator
                        <br />
                        Charles Sturt University Australia
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Honorary Chair</h4>
                      <img
                        src={require("../assets/img-comm/alvaro.jpg")}
                        alt="Prof. Alvaro Rocha"
                        width="260"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>Professor. Álvaro Rocha</b>
                        <br /> Professor, University of Lisbon, Portugal
                        <br /> President of AISTI (Iberian Association for
                        Information Systems and Technologies) <br />
                        Chair of IEEE SMC Portugal Section Society Chapter
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/abrar.jpg")}
                        alt=""
                        width="260"
                        height="350"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Abrar Ullah</b>
                        <br /> Associiate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/maria2.png")}
                        alt="Prof. Maria Sausa"
                        width="280"
                        height="350"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. Maria José Sousa</b>
                        <br /> Professor, University Institute of Lisbon,
                        Portugal
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/Ryad.jpg")}
                        alt=""
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Ryad Soobhany</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/Imran.jpg")}
                        alt="Imran Razzak"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Imran Razzak</b>
                        <br /> Senior Lecturer,School of Information Technology,
                        Deakin Univesity, Victoria, Australia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>Posters Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Talal Shaikh"
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>TBC</b>
                        <br /> TBC
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>International Chair</h4>
                      <img
                        src={require("../assets/img-comm/sajid.png")}
                        alt=""
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Sajid Anwar</b>
                        <br /> Associate Professor, Institute of Management
                        Sciences, Peshawar
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/chan.jpg")}
                        width="210"
                        height="240"
                        alt="David Tien"
                      />
                      <br />
                      <p className="organiser_intro  mt-2">
                        <b> Dr. Anthany Chan</b>
                        <br /> Charles Sturt University Australia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Ibrahim Nafees"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        TBC
                        {/* <b>Professor. Ibrahim A. Hameed</b>
                        <br /> Professor, Norwegian University of Science, and
                        Technology (NTNU) <br /> Chair of the IEEE Computational
                        Intelligence Society (CIS), Norway */}
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/gupta.jpeg")}
                        alt="Dr. B B Gupta"
                        width="200"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. B B Gupta</b>
                        <br />
                        Assistant Professor, National Institute of Technology
                        kurukshetra, India
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/fernando.jpg")}
                        alt="Dr. Fernando Moreira"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Professor. Fernando Moreira</b>
                        <br /> Professor Catedrático, Diretor do Departamento de
                        Ciência e Tecnologia, Universidade Portucalense: Porto,
                        Portugal
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Abdul Rauf"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>TBC</b>
                        {/* <br /> RISE Research Institute of Sweden */}
                      </p>
                    </div>
                  </div>

                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Publicity Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Prof. Maria Sausa"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>TBC</b>
                        {/* <b>Professor. Maria José Sousa</b>
                        <br /> Professor, University Institute of Lisbon,
                        Portugal */}
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Publicity Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Salma Noor"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>TBC</b>
                        {/* <br /> Assistant Professor, Shaheed Benazir Bhutto Women
                        University, Pakistan */}
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Prof. Maria Sausa"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>TBC</b>
                        <br />
                        {/* Associate Professor Indian Institute of Technology
                        Indore, India */}
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Dr. Abdul Qayyum"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>TBC</b>
                        {/* <br /> Lecturer, University of Burgundy, France */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
