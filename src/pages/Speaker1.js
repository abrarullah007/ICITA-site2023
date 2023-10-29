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
                        src={require("../assets/img-comm/alvaro.jpg")}
                        alt=""
                        width="260"
                        height="240"
                      />
                      <h4>Prof.Alvaro Roca</h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>
                              Professor, University of Lisbon, Portugal
                              Vice-Chair of IEEE SMC Portugal Section Society
                              Chapter
                            </i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          Álvaro Rocha holds the title of Honorary Professor,
                          and holds a D.Sc. in Information Science, Ph.D. in
                          Information Systems and Technologies, M.Sc. in
                          Information Management, and BCs in Computer Science.
                        </p>
                        <p align="left">
                          He is a Professor of Information Systems at the
                          University of Lisbon - ISEG, researcher at the ADVANCE
                          (the ISEG Centre for Advanced Research in Management),
                          and a collaborator researcher at both LIACC
                          (Laboratory of Artificial Intelligence and Computer
                          Science) and CINTESIS (Center for Research in Health
                          Technologies and Information Systems). His main
                          research interests are maturity models, information
                          systems quality, online service quality, requirements
                          engineering, intelligent information systems,
                          e-Government, e-Health, and information technology in
                          education.
                        </p>
                        <p align="left">
                          He is also Vice-Chair of the IEEE Portugal Section
                          Systems, Man, and Cybernetics Society Chapter, and
                          Founder and Editor-in-Chief of two Scopus and SCIMago
                          journals: JISEM - Journal of Information Systems
                          Engineering & Management; and RISTI - Revista Ibérica
                          de Sistemas e Tecnologias de Informação / Iberian
                          Journal of Information Systems and Technologies.
                        </p>
                        <p align="left">
                          Moreover, he has served as Vice-Chair of Experts for
                          the European Commission’s Horizon 2020 Program, and as
                          an Expert at the COST - intergovernmental framework
                          for European Cooperation in Science and Technology, at
                          the European Commission’s Horizon Europe Program, at
                          the Government of Italy’s Ministry of Universities and
                          Research, at the Government of Latvia’s Ministry of
                          Finance, at the Government of Mexico's National
                          Council of Science and Technology, at the Government
                          of Polish's National Science Centre, and at the
                          Government of Cyprus's Research and Innovation
                          Foundation.
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

export default Speaker1;
