import React from "react";

class Camera extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "ICITA 2024 | Camera Ready Paper - 18th International Conference on Information Technology and Applications (ICITA)";
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
                      <h1>Camera Ready Paper Guidelines</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <div className="row speakers_row">
                      <h6>For the paper to be included in the proceedings:</h6>
                      <p align="left">
                        <ul style={{ "list-style-type": "disc" }}>
                          <li>
                            The authors must address the minor changes provided
                            by the comments from reviewers and the Area
                            Chair(s); please include a file entitled 'Changes
                            after review' with a bulleted list of the
                            modifications to the paper.
                          </li>
                          <li>
                            The authors must submit a{" "}
                            <a href="https://www.icita.world/files/Book_Contributor_EN_Limited_v1_1.docx">
                              License-to-Publish
                            </a>{" "}
                            form signed by the corresponding author of the
                            paper. Digital signature is not acceptable. The
                            corresponding author, who should match the
                            corresponding author marked on the paper, must have
                            the full right, power, and authority to sign the
                            agreement on behalf of all the authors of the paper,
                            and accepts responsibility for releasing this
                            material on their behalf. The corresponding author
                            must be available to carry out a proof check of the
                            paper before the publication. Springer will contact
                            the corresponding author when the final proof is
                            ready and the corresponding author will be given a
                            72-hour timeslot to proof-check the paper. If the
                            corresponding author do not respond within the
                            timeslot given, the paper is automatically
                            considered approved.
                          </li>
                          <li>
                            Each paper must be associated with a unique ICITA
                            2024 registration. One author must register to
                            attend the conference by the camera-ready submission
                            deadline (Aug 28, 2024). Authors can present
                            multiple papers with a single registration only if
                            they are first authors on all papers. You will be
                            asked to submit your conference registration number
                            when you submit your camera-ready material.
                          </li>
                          <li>
                            All camera-ready material and the signed License to
                            Publish form must be uploaded to the paper
                            submission system within a single zip file before
                            the camera-ready submission deadline (Aug 28, 2024);
                            See details and the camera-ready submission
                            checklist below.
                          </li>
                        </ul>
                      </p>
                      <h6>Preparing Final Version</h6>
                      <p align="left">
                        The proceedings will be published as Lecture Notes in
                        Network Security (LNNS) in both electronic and paper
                        versions by Springer. Please read carefully the
                        information for authors from Springer. You must use the
                        <a
                          href="https://www.icita.world/files/Springer_Template.docm"
                          target="_blank"
                        >
                          LNCS templates (LaTeX2e or Word)
                        </a>{" "}
                        available on the Springer website to prepare your paper.
                        The templates are also available in Overleaf.
                      </p>

                      <p align="left">
                        To accommodate changes requested by the reviewers while
                        also still accommodating additional content that
                        Springer will add to your paper to link to your
                        supplementary material (potentially putting your paper
                        over the original 10-page limit), we will allow your
                        paper to expand to 8½ pages (including figures and
                        tables) + 2 pages for references, leaving room for
                        additional Springer content/formatting on the bottom
                        half of page 11. Note that since Springer will re-set
                        your paper with the formatting rules we specified, it is
                        still extremely important that you strictly adhere to
                        the guidelines (i.e., no spaces, no modified margins, no
                        vertical spacing adjustments, no font adjustments,
                        etc.).{" "}
                        <b>
                          The program chairs reserve the right to reject papers
                          that are over the 10½ -page limit in the final
                          version, or to reject those that have modified
                          formatting commands in the Springer templates.
                        </b>
                      </p>
                      <p align="left">
                        All figures are printed in black and white. Colored
                        figures remain in color in the online version. Please
                        make sure that any colored figures are comprehensible in
                        black and white. Springer does not support color in
                        text, tables, or in equations.
                      </p>
                      <p align="left">
                        Please ensure that Springer's format for bibliographical
                        references is strictly enforced. This is important, for
                        instance, when citing previous ICITA proceedings.
                      </p>
                      <h6>Authors and Publication Names</h6>
                      <p align="left">
                        When listing authors in the author section on your
                        paper, please use "firstname lastname” convention. Do
                        not abbreviate firstnames. You may include middle
                        initials. For example: Paul S. Kirk. Check with your
                        co-authors to ensure their correct publication names
                        were used and whether or not you should include their
                        middle initials.
                      </p>
                      <p align="left">
                        If the same author appears on multiple papers, their
                        name should appear in the same form on all papers.
                      </p>
                      <h6>Submitting your Camera-ready files</h6>
                      <p align="left">
                        Camera-ready material must be submitted by Aug 28, 2024.
                        As described below, all files must be uploaded to the
                        submission site.
                      </p>
                      <p align="left"></p>
                      <p align="left"></p>
                      <p align="left"></p>
                      <p align="left"></p>
                      <p align="left"></p>

                      <br></br>

                      {/* Camera Ready Paper Submission */}

                      <p align="left">
                        <b>
                          The version of papers must include names, e-mail and
                          affiliation of the authors. This information must be
                          saved in Word and also in PDF format. These files must
                          be accompanied by the filled ‘Consent to Publish’
                          form. Camera Ready Paper must be submitted in MS Word
                          format with a <b>hand-written</b> signed consent to
                          publish form.
                        </b>
                        <ul>
                          <li>
                            {" "}
                            <b>
                              {" "}
                              <a
                                href="https://www.icita.world/files/Book_Contributor_EN_Limited_v1_1.docx"
                                target="_blank"
                              >
                                Click here to download the consent form
                              </a>
                            </b>
                          </li>
                          <li>
                            {" "}
                            <b>
                              {" "}
                              <a
                                href="https://www.icita.world/files/Springer_Template.docm"
                                target="_blank"
                              >
                                Click here to download the Springer manuscript
                                template
                              </a>
                            </b>
                          </li>
                        </ul>
                      </p>
                      <p align="left">
                        To submit or upload a paper please go to{" "}
                        <div className="button button_3 cta_button pull-left">
                          <a
                            href="https://forms.gle/AEsH1KNDac7bKKXy7"
                            target="_blank"
                          >
                            <span>
                              Camera-Ready
                              <img
                                src={require("../assets/arrow.png")}
                                alt=""
                              />
                            </span>
                          </a>
                        </div>
                      </p>
                      {/* <p align="left">
                        To submit camera ready paper please go to{" "}
                        <b>Easychair conference Management System:</b>
                      </p>
                      <br></br>
                      <div className="button button_3 cta_button pull-left">
                        <a
                          href="https://forms.gle/AEsH1KNDac7bKKXy7"
                          target="_blank"
                        >
                          <span>
                            Camera-Ready
                            <img src={require("../assets/arrow.png")} alt="" />
                          </span>
                        </a>
                      </div>
                      <p align="left">
                        <b>
                          Note: You must submit your paper in MS Word format for
                          editing{" "}
                          <ul>
                            <li>
                              The camera ready paper must be in MS-word format
                              and not exceed 10 page limit
                            </li>
                            <li>
                              The camera ready paper must be accompanied by the
                              'consent to publish' form duly signed on behalf of
                              all authors
                            </li>
                            <li>
                              The files (paper and consent) must use paper ID as
                              a prefix e.g. 1029_paper.docx and
                              1029_consent.docx
                            </li>
                          </ul>
                        </b>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 sidebar_col">
                <div className="sidebar">
                  <br></br>
                  <p>
                    {" "}
                    <img
                      src={require("../assets/springerlink.jpg")}
                      width="230"
                      height="auto"
                    />{" "}
                  </p>
                  <div className="categories sidebar_list">
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
                  </div>
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

export default Camera;
