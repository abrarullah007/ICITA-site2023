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
                        src={require("../assets/img-comm/blank.png")}
                        alt=""
                        width="200"
                        height="260"
                      />
                      <h4>Dr. Ronnie Figueiredo</h4>

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
                          He´s academic scientist at the School of Technology
                          and Management, Centre of Applied Research in
                          Management and Economics (CARME), Polytechnic of
                          Leiria. The studies at the CARME combines innovations
                          in spatial science, artificial intelligence methods in
                          machine learning (e.g., deep learning) and data
                          mining. He's the author of Spinner Innovation Model®,
                          published in indexed international journals. He has
                          edited or co-edited books on technology, management &
                          innovation fields. His research interests include
                          “Technology Management and Economics” applying Data
                          Mining and Deep Learning techniques., Portugal
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
