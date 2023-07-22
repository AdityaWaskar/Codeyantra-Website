import React from "react";
import "./banner.css";
import { logo } from "../../assets";

const Banner = () => {
  return (
    <section id="banner">
      <div className="bannerLogo">
        <img src={logo} alt="" />
      </div>
      <p className="main_text">
        <div className="firstword1">
          <span className="firstword letter">C</span>
          <span className="firstword letter">O</span>
          <span className="firstword letter">D</span>
          <span className="firstword letter">E</span>
        </div>
        <div className="secondword2">
          <span className="secondword letter">Y</span>
          <span className="secondword letter">A</span>
          <span className="secondword letter">N</span>
          <span className="secondword letter">T</span>
          <span className="secondword letter">R</span>
          <span className="secondword letter">A</span>
        </div>
      </p>

      <p className="sub_text">
        &ldquo; Decode Before <span>Encode </span> &rdquo;
      </p>
      <img className="codingGif" src="./img/coding.gif" alt="" />
    </section>
  );
};

export default Banner;
