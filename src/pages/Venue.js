import React from "react";

class Venue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "ICITA 2024 | Venue - 18th International Conference on Information Technology and Applications (ICITA)";
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
                    <h1>Venue</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-xl-12 col-md-12">
                      <p align="justify">
                        {" "}
                        The event will be held in a hybrid mode (online and
                        face-to-face). The face-to-face event will be held at:{" "}
                        <br></br>
                        <h4>The Hilton</h4>{" "}
                        <h5>Hilton Hotel, Sydney, Australia</h5>
                        <p>
                          {/* <a href="https://www.google.com/maps/place/Scuola+di+Management+ed+Economia/@45.0374086,7.6507604,15z/data=!4m2!3m1!1s0x0:0x889a3caf1aeb2f2?sa=X&ved=2ahUKEwib8pvL8YD6AhW-X_EDHTSVANEQ_BJ6BAhsEAU">
                            Google Map
                          </a> */}
                        </p>
                        {/* <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11277.540000789755!2d7.6507604!3d45.0374086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478812d15cd975c5%3A0x889a3caf1aeb2f2!2sSchool%20of%20Management%20and%20Economics!5e0!3m2!1sen!2sae!4v1689586368967!5m2!1sen!2sae"
                          width="600"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe> */}
                      </p>
                      {/* <p align="justify">
                        Links for the online event and program schedule will be
                        shared with all participants.
                      </p> */}
                      {/* <h3>Accomodation</h3>
                      <p>
                        If you are planning to attend the face to face event,
                        there are plenty of hotels in the close proximity of the
                        conference venue.
                        <a href="https://tinyurl.com/5n6vahnj" target="_blank">
                          Click here{" "}
                        </a>{" "}
                        for more details.
                      </p> */}
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

export default Venue;
