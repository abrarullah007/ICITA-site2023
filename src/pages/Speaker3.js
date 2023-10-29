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
                        src={require("../assets/img-comm/davide.jpg")}
                        alt=""
                        width="200"
                        height="260"
                      />
                      <h4>Dr Davide Calandra</h4>

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
                          Assistant Professor in business administration and
                          accounting at the University of Turin - Department of
                          Management "Valter Cantino". Co-lecturer in the PhD
                          Program in Turin and didactic programs in several
                          institutions such as Wroclaw University of Business
                          and Economics or University of Palermo. His research
                          interests cover new technologies applications in
                          accounting, auditing and accountability, and the
                          application and management of new technologies in the
                          health sector such as blockchain and artificial
                          intelligence. Finally, he also deals with the Islamic
                          economy and finance field.
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
