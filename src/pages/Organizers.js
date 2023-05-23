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
                    <div className="col-xl-4 col-md-4">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/abrar1.jpg")}
                        alt=""
                        width="260"
                        height="300"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr Abrar Ullah</b>
                        <br /> Associate Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/davide.jpg")}
                        alt="Dr. Davide Calandra"
                        width="280"
                        height="300"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr Davide Calandra</b>
                        <br /> Assistant Professor, University of Turin, Italy
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>General Chair</h4>
                      <img
                        src={require("../assets/img-comm/raff.jpg")}
                        alt="Prof. Maria Sausa"
                        width="280"
                        height="300"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. Raffaele Di Fuccio</b>
                        <br /> Assistant Professor, University of Foggia, Italy
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
                        <b>Dr Ryad Soobhany</b>
                        <br /> Assistant Professor, Heriot-Watt University,
                        Edinburgh|<b>Dubai</b>|Malaysia
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
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
                    <div className="col-xl-4 col-md-6">
                      <h4>General Co-chair</h4>
                      <img
                        src={require("../assets/img-comm/val.jpg")}
                        alt="Dr. Valerio Brescia"
                        width="230"
                        height="240"
                      />
                      <p className="organiser_intro  mt-2">
                        <b>Dr Valerio Brescia</b>
                        <br /> Assistant Professor, University of Turin, Italy
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-4">
                      <h4>International Chair</h4>
                      <img
                        src={require("../assets/img-comm/sajid.png")}
                        alt=""
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr Sajid Anwar</b>
                        <br /> Professor, Institute of Management Sciences,
                        Peshawar
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/silvana.jpg")}
                        width="210"
                        height="240"
                        alt="Silvana Secinaro"
                      />
                      <br />
                      <p className="organiser_intro  mt-2">
                        <b> Dr Silvana Secinaro</b>
                        <br /> Associate professor, University of Turin, Italy
                      </p>
                    </div>

                    <div className="col-xl-4 col-md-4">
                      <h4>International Advisor</h4>
                      <img
                        src={require("../assets/img-comm/muss.PNG")}
                        width="200"
                        height="240"
                        alt="Mussiraliyeva Shynar Zhenisbekovna"
                      />
                      <br />
                      <p className="organiser_intro  mt-2">
                        <b> Dr Mussiraliyeva Shynar Zhenisbekovna</b>
                        <br /> Associate professor, AL-Farabi Kazakh National
                        University, Kazakhistan
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
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
                    <div className="col-xl-6 col-md-6">
                      <h4>Workshop Chair</h4>
                      <img
                        src={require("../assets/img-comm/paolo.jpg")}
                        alt="Dr B B Gupta"
                        width="200"
                        height="240"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Prof. Paolo Biancone</b>
                        <br />
                        Professor, University of Turin, Italy
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
                        src={require("../assets/img-comm/fed.png")}
                        alt="Dr. Federico Chmet"
                        width="220"
                        height="240"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr. Federico Chmet</b>
                        <br /> PostDoc Researcher, University of Turin, Italy
                      </p>
                    </div>

                    <div className="col-xl-4 col-md-4">
                      <h4>Special Session Chair</h4>
                      <img
                        src={require("../assets/img-comm/imad.jpg")}
                        alt="Dr Imad Rida "
                        width="220"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr Imad Rida </b>
                        <br />
                        BMBI Laboratory, University of Technology of Compiègne,
                        France
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
                        src={require("../assets/img-comm/fran.jpg")}
                        alt="Francesco Sulla"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Francesco Sulla</b>
                        <br />
                        Researcher, University of Foggia, Italy
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/antonio.jpg")}
                        alt="Giusi Antonia Toto"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Giusi Antonia Toto</b>
                        <br /> Researcher, University of Foggia, Italy
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/shooni.jpg")}
                        alt="Giusi Antonia Toto"
                        width="200"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. Shaukat Ali</b>
                        <br /> Lecturer, University of Peshawar, Pakistan
                      </p>
                    </div>
                  </div>
                  <div className="row speakers_row">
                    <div className="col-xl-4 col-md-4">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/Babar.jpg")}
                        alt="Michele Oppioli"
                        width="220"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr Babar Shah </b>
                        <br /> Associate Professor, Zayed University, Abu Dhabi,
                        UAE
                      </p>
                    </div>
                    <div className="col-xl-4 col-md-4">
                      <h4>Poster Chair</h4>
                      <img
                        src={require("../assets/img-comm/nadeem.PNG")}
                        alt="Basilio Petrolo"
                        width="230"
                        height="260"
                      />{" "}
                      <p className="organiser_intro  mt-2">
                        <b>Dr Nadeem Iqbal </b>
                        <br />
                        Associate Professor, Abdul Wali Khan University Mardan
                        (AWKUM), Pakistan
                      </p>
                    </div>
                    {/* <div className="col-xl-4 col-md-4">
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
