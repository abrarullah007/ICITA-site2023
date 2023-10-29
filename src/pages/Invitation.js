import React from "react";

class Invitation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "ICITA 2023 | Submissions - 17th International Conference on Information Technology and Applications (ICITA)";
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
                      <h1>Invitation</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <div className="row speakers_row">
                      <p align="left">
                        In order to get an invitation letter, you need to get
                        registered and pay the full fee as outlined on the{" "}
                        <a href="#/registration">registration page</a>. Upon
                        completing these steps, you will recieve invitation
                        letter addressed to registered author.
                      </p>
                      <p align="left">
                        <b>
                          Please note that we are not able to provide any
                          invitation letter without having a valid registration
                          with full payment. If you should have any questions
                          please contact chair@icita.world
                        </b>
                      </p>
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

export default Invitation;
