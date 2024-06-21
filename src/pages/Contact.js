import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "ICITA " + new Date().getFullYear() + " | Contact";
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
                    <h1>Contact</h1>
                  </div>
                </div>
                <div className="intro_text text-center">
                  <div className="row speakers_row">
                    <div className="col-md-6">
                      <h4>Find us</h4>
                      TBC
                    </div>
                    <div className=" col-md-6">
                      <div className="contact_title">
                        <h4>Get in touch</h4>
                      </div>
                      <div className="contact_text">
                        <p>For questions or enquiries, contact</p>
                      </div>
                      <div className="contact_list">
                        <ul>
                          <li>Contact Conference chair,</li>
                          <li>chair@icita.world</li>
                        </ul>
                      </div>
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

export default Contact;
