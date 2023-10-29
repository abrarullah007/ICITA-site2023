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
                        face-to-face). The face-to-face event will be held at:{" "}
                        <br></br>
                        <h4>
                          School of Management and Economics – University of
                          Turin
                        </h4>{" "}
                        <h5>
                          Corso Unione Sovietica, 220 - 10134 Torino
                          (Italy)University of Turin, Italy
                        </h5>
                        <p>
                          <a href="https://www.google.com/maps/place/Scuola+di+Management+ed+Economia/@45.0374086,7.6507604,15z/data=!4m2!3m1!1s0x0:0x889a3caf1aeb2f2?sa=X&ved=2ahUKEwib8pvL8YD6AhW-X_EDHTSVANEQ_BJ6BAhsEAU">
                            Google Map
                          </a>
                        </p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11277.540000789755!2d7.6507604!3d45.0374086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478812d15cd975c5%3A0x889a3caf1aeb2f2!2sSchool%20of%20Management%20and%20Economics!5e0!3m2!1sen!2sae!4v1689586368967!5m2!1sen!2sae"
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
                      <h3>Airport in Turin</h3>{" "}
                      <p align="left">
                        Owing to its position, Torino - easily reached by car,
                        train or plane - is the natural connection point between
                        the surrounding Alpine valleys and is where the major
                        national and international communication routes
                        converge. Two airports service Torino:
                        <ul style={{ "list-style-type": "disc" }}>
                          <li>Torino Airport</li>
                          <li>Malpensa 2000 Airport</li>
                        </ul>
                      </p>
                      <h3>Torino Airport</h3>{" "}
                      <p align="left">
                        This airport is 16 km from the city centre and is linked
                        by a bus service and a railway connection taking 30 and
                        19 minutes, respectively.{" "}
                      </p>
                      <h3>Malpensa 2000 Airport</h3>{" "}
                      <p align="left">
                        This airport is about 100 km from Torino and offers
                        daily international and intercontinental flights. It is
                        considered the biggest hub in South Europe, with about.
                        100 world destinations. Malpensa is well-connected with
                        Turin’s city centre with the following bus services:
                        <ul style={{ "list-style-type": "disc" }}>
                          <li>
                            {" "}
                            <a href="https://torino.arriva.it/en/airport-line-torino-malpensa-airport/">
                              Arriva train
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.flixbus.co.uk/bus-routes/milan-malpensa-airport-turin?_sp=f86f5fc4-58c0-462a-8488-791e829500a0.1689002907946&atb_pdid=2b8bd31d-2a1f-487b-bb58-585b39bbbfbc&_ga=2.23976952.351802020.1689002900-1753041016.1689002900"
                              target="_blank"
                            >
                              Flix Bus
                            </a>
                          </li>
                        </ul>
                      </p>
                      <h3>How to move around in Turin?</h3>{" "}
                      <p align="left">
                        You can download this app: Moovit
                        <ul style={{ "list-style-type": "disc" }}>
                          <li>
                            {" "}
                            <a href="https://play.google.com/store/apps/details?id=com.tranzmate&hl=it&gl=US">
                              Playstore
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://apps.apple.com/us/app/moovit-all-transit-options/id498477945"
                              target="_blank"
                            >
                              Applestore
                            </a>
                          </li>
                        </ul>
                      </p>
                      <h3>Tickets for public transport</h3>{" "}
                      <p align="left">
                        Automatic machines or sales points (In Italy, we say
                        “Tabacchi”).<br></br>
                        <b>GTT</b> is our official public transportation firm:
                        <a
                          href="https://www.gtt.to.it/cms/en/59-en/fares"
                          target="_blank"
                        >
                          GTT
                        </a>
                        <br></br>
                        Toursim: useful links
                        <ul style={{ "list-style-type": "disc" }}>
                          <li>
                            <a
                              href="https://www.lonelyplanet.com/italy/liguria-piedmont-and-valle-daosta/turin"
                              target="_blank"
                            >
                              https://www.lonelyplanet.com/italy/liguria-piedmont-and-valle-daosta/turin
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.turismotorino.org/en/merenda-realer-0"
                              target="_blank"
                            >
                              https://www.turismotorino.org/en/merenda-realer-0
                            </a>
                          </li>
                          <li>
                            {" "}
                            <a
                              href=" https://www.turismotorino.org/en/extra-vermouth-lora-del-vermouthtm-di-torino"
                              target="_blank"
                            >
                              https://www.turismotorino.org/en/extra-vermouth-lora-del-vermouthtm-di-torino
                            </a>
                          </li>
                        </ul>
                      </p>
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
