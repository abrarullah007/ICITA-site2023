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
      "ICITA 2023 | Venue - 17th International Conference on Information Technology and Applications (ICITA)";
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
                        face-to-face). The face-to-face event will be held at{" "}
                        <br></br>
                        <h3>University of Turin, Italy</h3>{" "}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22547.9152675737!2d7.6589802180671755!3d45.05558226227108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d7acf722d37%3A0x37343872facda6b6!2sUniversity%20of%20Turin!5e0!3m2!1sen!2suk!4v1670846053920!5m2!1sen!2suk"
                          width="600"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                        ></iframe>
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
