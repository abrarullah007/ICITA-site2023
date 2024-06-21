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
                        src={require("../assets/img-comm/xiang.jpg")}
                        alt=""
                        width="260"
                        height="240"
                      />
                      <h4>Dr Xianzhi Wang </h4>

                      <div className="organiser_intro mt-2 col-md-12">
                        <div className="col-md-12">
                          <p align="center">
                            <i>
                              Senior Lecturer in the School of Computer Science,
                              Faculty of Engineering and IT, University of
                              Technology Sydney
                            </i>
                          </p>
                        </div>
                      </div>
                      <br></br>
                      <div className="intro_left_content text_left">
                        <p align="left">
                          Dr. Xianzhi Wang is a Senior Lecturer in the School of
                          Computer Science, Faculty of Engineering and IT,
                          University of Technology Sydney.
                        </p>
                        <p align="left">
                          Xianzhi's research interests include Internet of
                          Things (IoT), data mining, machine learning, and
                          recommender systems. His publications appear in
                          top-tier journals (e.g., IEEE TNNLS, IEEE MC, IEEE
                          TSC, ACM TIST, ACM TOIT) and top conferences (e.g.,
                          ICDM, KDD, WSDM, AAAI, IJCAI, ICDE, UbiComp, SIGIR,
                          CIKM).
                        </p>
                        <p align="left">
                          He actively serves as a PC member for premier
                          conferences (e.g., WSDM, KDD, SIGIR, NeurIPS, ACL,
                          IJCAI, AAAI, TheWebConf, and SDM) and regularly
                          reviews for IEEE TAI, TBD, TII, TITS, TEM, TCSS, TCB,
                          and TKDE. He is the recipient of ARC DECRA, DP, LP and
                          LIEF grants, two Best Paper Awards (IEEE SCC, CCF
                          NCSC), and IBM PhD Fellowship. He served as an Area
                          Chair for ACL'23, ADMA'23, FiCloud'22, ICSOC'22 and
                          Guest Editor for ACM TIST, ACM TOSN, and Springer PRL.
                          He is on the Editorial Board of six international
                          journals and holds various chairing roles in five
                          other conferences. Xianzhi is passionate about
                          applying smart sensing, machine learning, data mining,
                          and recommendation techniques to real-world
                          applications.
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
