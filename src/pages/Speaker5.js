import React from "react";

class Speaker5 extends React.Component {
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
                        height="220"
                      />
                      <h4>Dr Valerio Brescia</h4>

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
                          Assistant professor in public management and
                          accounting at the University of Turin, Department of
                          Management "Valter Cantino". Chartered accountant,
                          auditor, and author of several research papers in
                          broad fields such as smart cities, smart tourism
                          activities and dialogic accounting. Editor-in-Chief of
                          the European Journal of Volunteering and
                          Community-based Projects. Finally, over the years, he
                          has been involved in multiple European projects, such
                          as H2020 Avangard, to study proper business models for
                          electric mobility and an Erasmus + on social
                          entrepreneurship.
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

export default Speaker5;
