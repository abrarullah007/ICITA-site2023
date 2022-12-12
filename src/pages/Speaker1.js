import React from "react";

class Speaker1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Keynote Speakers - 17th International Conference on Information Technology and Applications (ICITA)";
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
                    <h1>Keynote Speaker</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <img
                        src={require("../assets/img-comm/helga.jpg")}
                        alt=""
                        width="260"
                        height="240"
                      />
                      <h4>Dr.Helga Hambrock</h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>
                              Senior Instructional Designer Adjunct Professor in
                              Educational Technology and Instructional Design
                              Concordia University, Chicago, US
                            </i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          Adjunct Professor in Educational Technology and
                          Instructional Design, Contact, Dr. Helga Hambrock
                          joined the Concordia University Chicago community as a
                          Senior Instructional Designer and Assistant Professor
                          in January 2016. With a background in education, she
                          taught in public and private schools in South Africa
                          for more than 15 years.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row speakers_row">
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/tanveer.png")}
                        alt="Prof. Maria Sausa"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. M Tanveer</b>
                        <br />
                        Associate Professor Indian Institute of Technology
                        Indore, India
                      </p>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <h4>Programme Committee Chair</h4>
                      <img
                        src={require("../assets/img-comm/Qayyum.jpg")}
                        alt="Dr. Abdul Qayyum"
                        width="230"
                        height="270"
                      />{" "}
                      <p className="organiser_intro mt-2">
                        <b>Dr. Abdul Qayyum</b>
                        <br /> Lecturer, University of Burgundy, France
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speaker1;
