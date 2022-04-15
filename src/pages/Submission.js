import React from "react";

class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "ICITA 2021 | Submissions - 15th International Conference on Information Technology and Applications (ICITA)";
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="col text-center">
                  <div className="section_title_container text-center">
                    <div className="section_title">
                      <h1>Submission System</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <div className="row speakers_row">
                      <p align="left">
                        {/* Prospective authors are encouraged to submit papers for
                        evaluation by the Program Committee. */}
                        The submission system will be live soon.
                      </p>
                      {/* <p align="left">
                        All papers must follow the formatting rules for
                        Proceedings Lecture Notes in Network Systems Series (see{" "}
                        <a
                          href="https://www.springer.com/de/authors-editors/book-authors-editors/resources-guidelines/book-manuscript-guidelines/manuscript-preparation/5636"
                          target="_blank"
                        >
                          Instructions for Authors at Springer Website) and be
                          written in English.
                        </a>
                      </p> */}
                      {/* <p align="left">
                        The version of papers for evaluation by the Program
                        Committee, saved in PDF format, must not include
                        identification, e-mail and affiliation of the authors.
                        This information must only be available in the
                        camera-ready version of accepted papers, saved in Word
                        or Latex format and also in PDF format. These files must
                        be accompanied by the filled ‘Consent to Publish’ form.
                        All files need to be compressed(e.g. ZIP file) and
                        uploaded at the conference management system.
                      </p> */}

                      {/* <p align="left">
                        To submit or upload a paper please go to{" "}
                        <b>Easychair conference Management System:</b>
                      </p> */}
                      <br></br>
                      {/* <div className="button button_3 cta_button pull-left">
                        <a
                          href="https://easychair.org/conferences/?conf=icita2021"
                          target="_blank"
                        >
                          <span>
                            Easychair
                            <img src={require("../assets/arrow.png")} alt="" />
                          </span>
                        </a>
                      </div> */}
                      {/* <p>
                        Note: To submit a paper you need to have an EasyChair
                        account.
                      </p> */}

                      {/* Camera Ready Paper Submission */}
                      {/* <p align="left">
                        <h4>Submit Camera Ready Papers by 20th August 2021</h4>
                      </p>
                      <p align="left">
                        <b>
                          The version of papers must include names, e-mail and
                          affiliation of the authors. This information must be
                          saved in Word and also in PDF format. These files must
                          be accompanied by the filled ‘Consent to Publish’
                          form.
                          <a
                            href="https://www.icita.world/files/Book_Contributor_EN_Limited_v1_1.docm"
                            target="_blank"
                          >
                            Click here to download the consent form.
                          </a>
                          All files need to be compressed(e.g. ZIP file) and
                          uploaded at the conference management system.
                        </b>
                      </p> */}

                      {/* <p align="left">
                        To submit camera ready paper please go to{" "}
                        <b>Easychair conference Management System:</b>
                      </p> */}
                      <br></br>
                      {/* <div className="button button_3 cta_button pull-left">
                        <a
                          href="https://easychair.org/conferences/?conf=icita2021"
                          target="_blank"
                        >
                          <span>
                            Easychair
                            <img src={require("../assets/arrow.png")} alt="" />
                          </span>
                        </a>
                      </div>
                      <p>
                        <b>Note: You must update the existing paper </b>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 sidebar_col">
                <div className="sidebar">
                  <br></br>
                  {/* <p>
                    {" "}
                    <img
                      src={require("../assets/springerlink.jpg")}
                      width="230"
                      height="auto"
                    />{" "}
                  </p> */}
                  {/* <div className="categories sidebar_list">
                    <div className="sidebar_title">Proceedings</div>
                    <ul>
                      <li>
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          Lecture Notes in Network Systems Series
                        </a>
                        <img
                          src={require("../assets/lnns.PNG")}
                          width="230"
                          height="340"
                        />
                      </li>
                    </ul>
                  </div> */}
                  <div className="categories sidebar_list">
                    <img
                      src={require("../assets/scopus.png")}
                      width="230"
                      height="auto"
                    />
                  </div>
                  <br></br>
                  <div className="categories sidebar_list">
                    <img
                      src={require("../assets/isi.jpg")}
                      width="230"
                      height="auto"
                    />
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

export default Submission;
