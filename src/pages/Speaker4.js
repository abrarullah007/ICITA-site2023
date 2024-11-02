import React from "react";

class Speaker4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "Keynote Speakers - 18th International Conference on Information Technology and Applications (ICITA)";
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
                        src={require("../assets/img-comm/blank.png")}
                        alt=""
                        width="200"
                        height="260"
                      />
                      <h4>Dr. Raffaele Di Fuccio</h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>
                              {/* Director of Centro ALGORITMI, Director of the
                              Doctoral Program in Biomedical Engineering
                              Department of Informatics / Centro ALGORITMI,
                              School of Engineering, University of Minho,
                              Portugal */}
                            </i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          Raffaele Di Fuccio (raffaele.difuccio@unipegaso.it) is
                          an associate professor in Special Education (M-PED/03)
                          at Pegaso Telematic University. He is a biomedical
                          engineer and holds a Ph.D. in Human Mind and Gender
                          Studies from the University of Naples - Federico II.
                          His research interests are focused on enhancing
                          learning through the application of innovative
                          technologies, particularly by employing a multisensory
                          approach to education, enhanced by digital tools,
                          harnessing the potential of Mixed Reality systems, and
                          specifically, the Tangible User Interfaces (TUI)
                          paradigm. He is also involved in the application of
                          serious games in training and education.
                        </p>
                      </div>
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

export default Speaker4;
