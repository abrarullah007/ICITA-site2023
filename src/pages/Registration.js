import React from "react";

class Registration extends React.Component {
  componentDidMount() {
    document.title =
      "Registration - 15th International Conference on Information Technology and Applications (ICITA)";
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
                      <h1> Conference Registration</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <p align="center">
                      {/* <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScMyVMhxEatdz-PJTBIxb8WPY1MlgyFc4RaZTWndTSciI0Hrw/viewform?embedded=true"
                        width="740"
                        height="1446"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                      >
                        Loading…
                      </iframe> */}
                      <h4> Registration Fee</h4>
                      <p>
                        The event is organised in a hybrid mode. All accepted
                        papers will be published in the{" "}
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          Lecture Notes in Network Systems Series (in process)
                        </a>
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        ></a>
                        . The following registration fee apply:
                        <table
                          style={{ width: "100%" }}
                          border="1"
                          cellspacing="0"
                          cellpadding="0"
                        >
                          <tbody>
                            <tr>
                              <td valign="bottom">
                                <p>
                                  <strong>Registration</strong>
                                </p>
                              </td>
                              <td valign="bottom">
                                <p>
                                  <strong>Amount</strong>
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td valign="bottom">
                                <p>
                                  <b>Online</b>
                                </p>
                              </td>
                              <td valign="bottom">
                                <p>
                                  <b style={{ color: "green" }}>USD 100</b>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>In presence/Face to face</p>
                              </td>
                              <td valign="bottom">
                                <p>USD 250</p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>In presence (Student)</p>
                              </td>
                              <td valign="bottom">
                                <p>USD 150</p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>Exhibitor for companies / products</p>
                              </td>
                              <td valign="bottom">
                                <p>USD 350 </p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>&nbsp;</p>
                              </td>
                              <td valign="bottom">
                                <p>&nbsp;</p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>
                                  <strong>Optional Items</strong>
                                </p>
                              </td>
                              <td valign="bottom">
                                <p>&nbsp;</p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>
                                  <b>Extra paper (Online)</b>
                                </p>
                              </td>
                              <td valign="bottom">
                                <p>
                                  <b style={{ color: "green" }}>USD 50</b>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>Extra paper (Face to face)</p>
                              </td>
                              <td valign="bottom">
                                <p>USD 100</p>
                              </td>
                            </tr>
                            <tr>
                              <td valign="bottom">
                                <p>Conference Dinner (October 21)</p>
                              </td>
                              <td valign="bottom">
                                <p>USD 30</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        {/* <div className="section_title_container text-center">
                          <div className="section_title">
                            <h2>Online participants</h2>
                          </div>
                          <div className="intro_left_content text_left">
                            <p align="left">
                              There is no registration fee for publication and
                              attendance for online participants. Registration
                              fee only applies to those attending the conference
                              on site.
                            </p>
                          </div>
                        </div> */}
                        {/* <div className="button button_2 intro_button">
                          <a
                            href="https://reg.itmas.org/account/signup"
                            target="_blank"
                          >
                            <span>
                              Registration{" "}
                              <img
                                src={require("../assets/arrow.png")}
                                alt=""
                              />
                            </span>
                          </a>
                        </div> */}
                      </p>
                    </p>
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

export default Registration;
