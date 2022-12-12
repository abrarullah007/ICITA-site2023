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
      "ICITA 2023 | Programme - 17th International Conference on Information Technology and Applications (ICITA)";
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
                    <h1>Programme (TBC)</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  {/* <div className="row speakers_row">
                    {" "}
                    Please note, that session 1 on day 1 (20th October 2022)
                    will be held in person at <br></br>
                    ISCTE Edificio I (Building 1)<br></br>
                    Auditorio<br></br>
                    J.J. Laginha<br></br>1 NE 1<br></br>
                    ISCTE Univesity Lisbon<br></br>
                    ISCTE - Instituto Universitário de Lisboa,Portugal.<br></br>
                    PS: The nearest Metro station is: Cidade Universitária The
                    venue is in the same block as student services. The building
                    is opposite IGOT, ISCTE
                    <a
                      href="https://goo.gl/maps/dgJvKF6ruBX4BQ2h9"
                      target="_blank"
                    >
                      Google Map Link
                    </a>
                    <br></br>
                  </div>
                  <div className="row speakers_row">
                    <a
                      href="https://www.icita.world/files/ICITA_2022.pdf"
                      target="_blank"
                    >
                      Click here to access the programme for ICITA 2022
                    </a>
                  </div> */}
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
