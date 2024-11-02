import React from "react";
import PageCarousel from "../components/PageCarousel";

class PreviousConferences extends React.Component {
  componentDidMount() {
    document.title =
      "Previous Conferences : 15th International Conference on Information Technology and Applications (ICITA)";
  }
  render() {
    return (
      <div className="speakers">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section_title_container text-center">
                <div className="section_subtitle">Previous Conferences</div>
                <div className="section_title">
                  <h1>Previous Conferences</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row speakers_row">
            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2023.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="https://2023.icita.world" target="_blank">
                      {" "}
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2023</div>
                </div>
              </div>
            </div>
            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2022.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="https://2022.icita.world" target="_blank">
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2022</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2021.PNG")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a href="https://2021.icita.world" target="_blank">
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2021</div>
                </div>
              </div>
            </div>
            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2016.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2016/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2016</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2017.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://web.archive.org/web/20170510020322/http://www.icita.org/"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2017</div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2018.PNG")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2018/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2018</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2019.PNG")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://web.archive.org/web/20190108042853/http://www.icita.org/index.jsp"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2019</div>
                </div>
              </div>
            </div>
            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2013.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2013/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2013</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2014.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2014/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2014</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2015.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2015/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2015</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2009.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      // href="https://web.archive.org/web/20190108042853/http://www.icita.org/index.jsp"
                      href="https://www.icita.org/icita/2011/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2011</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2009.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2009/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2009</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2008.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2008/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2008</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2007.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2007/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2007</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2005.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2005/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2005</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2004.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2004/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2004</div>
                </div>
              </div>
            </div>

            {/* <!-- Speaker --> */}
            <div className="col-xl-4 col-md-6">
              <div className="speaker">
                <div className="speaker_image">
                  <img
                    src={require("../assets/previous/icita2002.png")}
                    alt=""
                  />
                </div>
                <div className="speaker_info d-flex flex-column align-items-start justify-content-center">
                  <div className="speaker_name">
                    <a
                      href="https://www.icita.org/icita/2002/index.html"
                      target="_blank"
                    >
                      Archive
                    </a>
                  </div>
                  <div className="speaker_title">ICITA 2002</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviousConferences;
