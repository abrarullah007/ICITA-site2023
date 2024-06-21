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
                    {" "}
                    TBA
                    {/* Please note, that sessions on day 1 (20th October 2023) will
                    be held in person at <br></br>
                    School of Management and Economics – University of Turin,
                    Italy */}
                    <br></br>
                  </div>
                  <div className="row speakers_row">
                    {/* <a
                      href="https://www.icita.world/files/ICITA_2023.pdf"
                      target="_blank"
                    >
                      Click here to access the programme for ICITA 2023
                    </a> */}
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
