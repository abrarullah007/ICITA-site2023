import React from "react";
import carouselPic1 from "../assets/index.jpg";
import carouselPic2 from "../assets/turin1.jpg";
//import carouselPic3 from "../assets/blog_page.jpg";
import { Slide } from "react-slideshow-image";

class TopCarousel extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            <Slide>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${carouselPic1})` }}></div>
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title">
                            <h1>
                              <span>2023</span>
                              <span>
                                17th International Conference on Information
                                Technology and Applications (ICITA)
                              </span>
                            </h1>
                          </div>
                          <div className="home_info_container">
                            <div className="home_info">
                              <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li>20-22nd October 2023</li>
                                <li>Turin, Italy</li>
                                <li>Hybrid (Online + Face to Face)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${carouselPic2})` }}></div>
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title">
                            <h1>
                              <span>2023</span>
                              <span>University of Turin, Italy</span>
                            </h1>
                          </div>
                          <div className="home_info_container">
                            <div className="home_info">
                              <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li>20-22nd Oct 2023</li>
                                <li>Turin, Italy</li>
                                <li>Online + Face to Face)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    );
  }
}

export default TopCarousel;
