import React from "react";
import { Link } from "react-router-dom";

class CallForPapers extends React.Component {
  componentDidMount() {
    document.title =
      "Call For Papers - 18th International Conference on Information Technology and Applications (ICITA)";
  }

  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="col text-center">
                  <div className="section_title_container text-center">
                    <div className="contact_title">
                      <h1> Call for Papers</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <p align="left">
                      The purpose of ICITA is to provide a platform for
                      academics and professionals in computer technology to{" "}
                      <b>
                        publish, present, meet, exchange ideas, and establish
                        professional networks.
                      </b>{" "}
                      It is a forum for specific disciplinary research, as well
                      as on multi-disciplinary studies.{" "}
                    </p>
                    <p align="left">
                      Topics for publication and presentation can include, but
                      are not limited to the following research and development
                      areas/fields:
                    </p>
                    <h4>Theme of the Conference</h4>
                    <p>
                      <b>Algorithms, Analytics and AI Applications</b>
                    </p>

                    <div align="left">
                      <div>
                        <b>Conference Tracks</b>
                      </div>
                      <ul style={{ listStyleType: "circle" }} align="left">
                        <li>Big Data Analytics</li>
                        <li>Software Engineering</li>
                        <li>Business Process Engineering</li>
                        <li>Blockchain</li>
                        <li>Cloud computing  </li>
                        <li>Computer Graphics and Games Programming </li>
                        <li>Computer Networks</li>
                        <li>Computer Vision and Image Processing</li>
                        <li>Cybersecurity</li>
                        <li>Data Science</li>
                        <li>Digital Health</li>
                        <li>Evolutionary Computing</li>
                        <li>VR/VA and Games Applications in Industry</li>
                        <li>Human Computer Interaction</li>
                        <li>Information and Knowledge Management</li>
                        <li>Internet of Things and Cyber-Physical Systems</li>
                        <li>Machine learning</li>
                        <li>Mobile Computing</li>
                        <li>Digital Education</li>
                      </ul>
                      <br />
                      <p>
                        Authors are kindly invited to submit their formatted
                        full papers including results, tables, figures, and
                        references. Please, read authors guidelines carefully.
                      </p>

                      <h4> Types of Submissions and Decisions </h4>
                      <div>
                        The following types of papers can be submitted:
                        <ul style={{ listStyleType: "circle" }} align="left">
                          <li>
                            Finished or consolidated R&D work, to be included in
                            one of the Conference themes. These papers are
                            assigned a 10-page limit.
                          </li>
                          <li>
                            Ongoing works with relevant preliminary results,
                            open to discussion. These papers are assigned a
                            10-page limit.
                          </li>
                          {/* <li>
                          Poster paper: Initial work with relevant ideas, open
                          to discussion. These papers are assigned to a 4-page
                          limit.
                        </li> */}
                        </ul>
                      </div>
                      <p align="left">
                        Submitted papers for review must comply with the format
                        of Lecture Notes in Network Systems Series (see
                        Instructions for Authors at{" "}
                        <a
                          href="https://www.springer.com/de/authors-editors/book-authors-editors/resources-guidelines/book-manuscript-guidelines/manuscript-preparation/5636"
                          target="_blank"
                        >
                          Springer Website
                        </a>
                        ), be written in English, must not have been published
                        before, not be under review for any other conference or
                        publication and not include any information leading to
                        the authors’ identification. Therefore, the authors’
                        names, affiliations and bibliographic references should
                        not be included in the version for evaluation by the
                        Program Committee. This information should only be
                        included in the camera-ready version, saved in Word or
                        Latex format and also in PDF format. These files must be
                        accompanied by the filled 'Consent to Publish' form. All
                        files need to compressed e.g., ( a ZIP file), and
                        uploaded at the conference management system.
                      </p>
                      <p>
                        All papers will be subjected to a “double-blind review”
                        by at least three members of the Program Committee.
                      </p>
                      <p>
                        Based on Program Committee evaluation, a paper can be
                        rejected or accepted by the Conference Chairs. In the
                        later case, it can be accepted as the type originally
                        submitted. Thus, full papers can be accepted as full
                        papers only.
                      </p>
                      <p>
                        Poster papers and Company papers are not published in
                        the Conference Proceedings, being only presented and
                        discussed. The authors of accepted poster papers should
                        build and print a poster to be exhibited during the
                        Conference. This poster must follow an A1 vertical
                        format. The Conference includes Work Sessions where
                        these posters are presented and orally discussed, with a
                        7-minute limit per poster.
                      </p>
                      <p>
                        The authors of accepted full papers will have 15 minutes
                        to present their work in a Conference Work Session;
                        approximately 5 minutes of discussion will follow each
                        presentation.
                      </p>
                      <h4>Best Paper Award</h4>
                      <p>
                        Honoring outstanding scientific papers with high
                        practical relevance to the confernce tracks will be
                        given best paper award. Sponsored by the MDPI, a prize
                        of €500 will be awarded for the best article to be
                        presented in person at ICITA 2024.
                      </p>
                      <h4> Publication and Indexing </h4>
                      <p>
                        To ensure that a full paper is published, at least one
                        of the authors must be fully registered by the 20th of
                        June 2024, and the paper must comply with the suggested
                        layout and page-limit. Additionally, all recommended
                        changes must be addressed by the authors before they
                        submit the camera-ready version.
                      </p>
                      {/* <p>
                        No more than one paper per registration will be
                        published. An extra fee must be paid for publication of
                        additional papers, with a maximum of one additional
                        paper per registration. One registration permits only
                        the participation of one author in the conference.
                      </p> */}
                      <p>
                        Full papers will be published in Proceedings by
                        Springer, in Lecture Notes in Network System series.
                        Poster and company papers will not be published, just
                        presented in the conference.
                      </p>
                      <p>
                        Published Full papers will be submitted for indexation
                        by <b>ISI</b>, <b>SCOPUS</b>, and <b>Google Scholar</b>,
                        among others, and will be available in the{" "}
                        <b>SpringerLink Digital Library.</b>
                      </p>

                      {/* <h4> Extended Papers</h4>
                      <p>
                        Extended version of high quality selected papers will be
                        invited for publication in a{" "}
                        <a
                          href="https://www.mdpi.com/journal/electronics/special_issues/ML_electronics#editors"
                          target="_blank"
                        >
                          Special Issue (SI) on "Usability, Security and Machine
                          Learning" in Journal of Electronics.
                        </a>
                      </p> */}
                      <div className="button button_2 intro_button">
                        <Link to="/submissions">
                          <span>
                            Submissions{" "}
                            <img src={require("../assets/arrow.png")} alt="" />
                          </span>
                        </Link>
                      </div>
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
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          <img
                            src={require("../assets/lnns.PNG")}
                            width="230"
                            height="340"
                          />
                        </a>
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

export default CallForPapers;
