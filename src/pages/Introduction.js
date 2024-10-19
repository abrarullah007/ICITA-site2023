import React from "react";

class Introduction extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title_container text-center">
                <div className="section_title">
                  <h1>ICITA 2024</h1>
                </div>
              </div>
              <div className="intro_left_content text_left">
                <p align="left">
                  The 18th International Conference on Information Technology
                  and Applications (ICITA 2024) will be held in Sydney,
                  Australia on 17 - 19 October 2024. The conference is an annual
                  event and recognized as one of the major series of conferences
                  in Information Technology (IT in short). ICITA continues to
                  retain its tradition of being a high quality conference. The
                  event will open an opportunity for academics and industry
                  professionals worldwide to exchange their knowledge of the
                  state-of-the-art research and development in information
                  technology and applications. It will help participants
                  establish new links and extend professional networks. This
                  conference addresses the importance that IT professionals
                  stretch across narrowly defined subject areas and constantly
                  acquire a global technical and social perspective. ICITA 2024
                  offers such an opportunity to facilitate cross-disciplinary
                  and social gatherings.{" "}
                </p>
                <div className="col-lg-12 schedule_col">
                  <div className="schedule_container">
                    {/* <div className="schedule_title_bar schedule_title_bar_1 text-center">
                      Proceedings Publication
                    </div> */}
                    <div className="schedule_content text-left">
                      <strong>
                        {" "}
                        All accepted papers will be published as book chapters
                        in a High Quality book by Springer Book{" "}
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          {" "}
                          "Lecture Notes in Network Systems Series"
                        </a>{" "}
                        in both hardcopy as well as electronic version in ISSN
                        (Print): 2367-3370 and ISSN (electronic):2367-3389
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          {" "}
                          <img
                            src={require("../assets/springerlink.jpg")}
                            // width="230"
                            // height="auto"
                          />
                        </a>
                      </strong>
                    </div>
                  </div>
                </div>
                <p></p>
                <p align="left">
                  Since 2002 ICITA has maintained a high conference standard,
                  and several thousand academics and Information Technology
                  professionals have used it as a presenting, publishing and
                  networking medium for their research findings. We are
                  confident that more will be achieved during the next ten
                  years! The conference will be held at the Hilton Sydney,
                  Australia from the 17 through 19th of October, 2024. The aim
                  of International Conference on Information Technology and
                  Applications is to provide a platform for academics and
                  engineers in computer technology to meet, exchange ideas, and
                  establish professional networks. It is a forum which will
                  focus on specific disciplinary research as well as on
                  multi-disciplinary studies. The uniqueness of ICITA is that it
                  enables scientists in the world to communicate not only about
                  technical issues, but also any of the other areas which use
                  technology.
                </p>
                <p align="left">
                  Over the past many years, ICITA has been proudly sponsored by:
                  IEEE NSW Section, IEEE Computer Society, the University of
                  Technology Sydney, Australia; Charles Sturt University,
                  Australia; Heilongjiang University, China, Jiao-tong
                  University, China, University of Turin/Università degli Studi
                  di Torino, Italy, University Institute of Lisbon (ISCTE) -
                  Instituto Universitário de Lisboa, Portugal, and ACM SIG CHI
                  Singapore and Society of Industry Technology. For the ICITA
                  2024, we gladly welcome the Heriot-Watt University,
                  Edinburgh/Dubai/Malaysia to join others to be the sponsors of
                  this event.
                </p>
                <p align="left">
                  Full and short papers accepted and registered will be
                  published in &nbsp;
                  <a
                    href="https://www.springer.com/series/15179"
                    target="_blank"
                  >
                    Lecture Notes in Network Systems Series
                  </a>
                  , submitted for indexation by ISI, EI-Compendex, and SCOPUS ,
                  among others, and will be available in the SpringerLink
                  Digital Library.
                </p>
                <div className="row">
                  <div className="col-lg-4">
                    {" "}
                    <a
                      href="https://www.springer.com/series/15179"
                      target="_blank"
                    >
                      <img
                        src={require("../assets/springerlink.jpg")}
                        width="230"
                        height="auto"
                      />{" "}
                    </a>
                  </div>
                  <div className="col-lg-4">
                    <img
                      src={require("../assets/isi.jpg")}
                      width="230"
                      height="auto"
                    />
                  </div>
                  <div className="col-lg-4">
                    <img
                      src={require("../assets/scopus.png")}
                      width="230"
                      height="auto"
                    />
                  </div>
                </div>
                <br></br>

                <br></br>
                <p>
                  <strong>
                    <a href="https://www.icita.world/files/ICITA_2024.pdf">
                      ICITA 2024 Program
                    </a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Introduction;
