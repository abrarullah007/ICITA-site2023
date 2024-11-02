import React from "react";

class Organizers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Organisers - 18th International Conference on Information Technology and Applications (ICITA)";
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
                        src={require("../assets/img-comm/jason.png")}
                        alt=""
                        width="260"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>Dr Jason Williams</b>
                        <br />
                        Deputy Dean of School of Technologies,
                        <br />
                        Cardiff Metropolitan University, UK
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
                        <b>Prof. Álvaro Rocha</b>
                        <br /> Professor, University of Lisbon, Portugal
                        <br />
                        Vice-Chair of IEEE SMC Portugal Section Society Chapter
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/abrar1.jpg")}
                        alt=""
                        width="240"
                        height="300"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr Abrar Ullah</b>
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/David_tien1.jpg")}
                        alt=""
                        width="260"
                        height="280"
                      />
                      <p className="organiser_intro mt-2">
                        <b>Dr David Tien</b>
                        <br />
                        IEEE Computer Society Asia-Pacific Area Coordinator
                        <br />
                        Charles Sturt University Australia
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-4">
                      <h4>General Co-Chair</h4>
                      <img
                        src={require("../assets/img-comm/sajid.png")}
                        alt=""
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Prof. Sajid Anwar</b>
                        <br /> Professor, Institute of Management Sciences,
                        Peshawar
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/gwan.png")}
                        alt=""
                        width="200"
                        height="250"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Prof. Gwanggil Jeon</b>
                        <br />
                        Professor, Incheon National Univetsity Korea
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/kill.jpg")}
                        alt=""
                        width="200"
                        height="270"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Prof. Ki-ll Kim</b>
                        <br />
                        Professor, Chungnam National University, Republic of
                        Korea
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-3 col-md-3">
                      <h4>International Chair</h4>
                      <img
                        src={require("../assets/img-comm/roland.png")}
                        alt=""
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Prof. Roland Erik Haas</b>
                        <br />
                        International Institute of Information Technology
                        <br />
                        Bangalore, India
                      </p>
                    </div>
                    <div className="col-xl-3 col-md-3">
                      <h4>International Chair</h4>
                      <img
                        src={require("../assets/img-comm/xiaokang.png")}
                        alt=""
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr Xiaokang Zhou</b>
                        <br />
                        Associate Professor, Shiga University
                        <br /> Japan
                      </p>
                    </div>
                    <div className="col-xl-3 col-md-3">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/davide.jpg")}
                        alt="Dr. Davide Calandra"
                        width="200"
                        height="250"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Davide Calandra</b>
                        <br /> Assistant Professor, University of Turin, Italy
                      </p>
                    </div>
                    <div className="col-xl-3 col-md-3">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/maria2.png")}
                        alt="Prof. Maria Sausa"
                        width="220"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Maria José Sousa</b>
                        <br /> Pro-Rector for Distance Education, University
                        Institute of Lisbon, Portugal
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-4">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/teresa.jpg")}
                        alt="Dr Teresa Guarda"
                        width="230"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Teresa Guarda</b>
                        <br />
                        UDIMA - Distance University of Madrid, Spain{" "}
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/serena.png")}
                        alt="Dr Serena Strazzullo"
                        width="200"
                        height="220"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Serena Strazzullo</b>
                        <br />
                        University of Naples Federico II, Italy
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/Babar.jpg")}
                        alt="Dr Babar Shah"
                        width="200"
                        height="250"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Babar Shah</b>
                        <br />
                        Associate Professor, Zayed University, UAE
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-4">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/fernando_new.PNG")}
                        alt="Dr Fernando Moreira"
                        width="220"
                        height="260"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Prof. Fernando Moreira</b>
                        <br /> Full Professor, Department of Science and
                        Technolgy, Portucalense University, Porto, Portugal
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/Ryad.jpg")}
                        alt=""
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr Ryad Soobhany</b>
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>

                    <div className="col-xl-4 col-md-4">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/qasem.png")}
                        alt="Dr Imad Rida "
                        width="220"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr Qasem Abu Al-Haija </b>
                        <br />
                        Assistant Professor, Department of Cybersecurity, Jordan
                        University of Science and Technology, Irbid, Jordan
                      </p>
                    </div>
                  </div>

                  <div className="row speakers_row">
                    {/* <div className="col-xl-3 col-md-3">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Ginevra Degregori "
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Ginevra Degregori</b>
                        <br />
                        Researcher, University of Turin, Italy
                      </p>
                    </div> */}
                    <div className="col-xl-4 col-md-4">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/adrian.jpg")}
                        alt="Dr Adrian Turcanu"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Adrian Turcanu</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/diego.png")}
                        alt="Dr. Diego Oliva"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Diego Oliva</b>
                        <br />
                        Associate Professor, University of Guadalajara,
                        Guadalajara, Jalisco, Mexico
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/chiara.png")}
                        alt="Chiara Gallese"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Chiara Gallese</b>
                        <br />
                        Department of Law, University of Turin, Italy
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    {/* <div className="col-xl-4 col-md-4">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Michele Oppioli"
                        width="220"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>TBC </b>
                        <br /> TBC
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="Basilio Petrolo"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>TBC </b>
                        <br />
                        TBC
                      </p>
                    </div> 
                     <div className="col-xl-4 col-md-4">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/blank.png")}
                        alt="TBC"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>TBC </b>
                        <br /> TBC
                      </p>
                    </div> */}
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

export default Organizers;
