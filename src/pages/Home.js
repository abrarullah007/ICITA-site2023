import React from "react";
import TopCarousel from "./TopCarousel";
import Introduction from "./Introduction";
import Timer from "../components/Timer";
const axios = require("axios");

class Home extends React.Component {
  componentDidMount() {
    document.title =
      "ICITA 2021 Conference: The 15th International Conference on Information Technology and Applications (ICITA)";
  }
  render() {
    return (
      <div>
        <TopCarousel />
        {/* <Timer /> */}
        <Introduction />
      </div>
    );
  }
}

export default Home;
