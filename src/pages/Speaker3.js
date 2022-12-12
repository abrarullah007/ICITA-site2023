import React from "react";

class Speaker3 extends React.Component {
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
                        src={require("../assets/img-comm/fernando3.jpg")}
                        alt=""
                        width="200"
                        height="260"
                      />
                      <h4>Dr. José Manuel Machado</h4>

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
                          Director of Centro ALGORITMI, Director of the Doctoral
                          Program in Biomedical Engineering Department of
                          Informatics / Centro ALGORITMI, School of Engineering,
                          University of Minho, Portugal
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

export default Speaker3;
