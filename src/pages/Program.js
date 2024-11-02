import React from "react";

class Program extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title =
      "ICITA 2024 | Programme - 18th International Conference on Information Technology and Applications (ICITA)";
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
                    <h1>Programme </h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    Please note, that sessions on 17th - 18th October 2024 will
                    be held in person at <br></br>
                    Hilton, opposite the Queen Victoria Building 488 George St,
                    Sydney NSW 2000, Australia <br></br>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.694293239876!2d151.2053992765544!3d-33.87176861921402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3ef48720f1%3A0xe4cb86124df9b798!2sHilton%20Sydney!5e0!3m2!1sen!2sae!4v1727885585697!5m2!1sen!2sae"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <br></br>
                  </div>
                  <div className="row speakers_row">
                    <a
                      href="https://www.icita.world/files/ICITA_2024.pdf"
                      target="_blank"
                    >
                      Click here to access the programme for ICITA 2024
                    </a>
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

export default Program;
