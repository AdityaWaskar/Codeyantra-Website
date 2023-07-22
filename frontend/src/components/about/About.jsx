import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import "./about.css";
import { logo } from "../../assets";
import AboutSkeleton from "./skeleton/AboutSkeleton";

const About = () => {
  return (
    <>
      <Navigation page={"about"} />
      {(
        <div className="about_container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="mainContent">
            <p>
              Codeyantra is a technical coding committee of Shree LR Tiwari
              College of Engineering (SLRTCE) in Mira Road, Mumbai. It was
              established in 2019 with the vision of creating a vibrant and
              dynamic coding culture among the students of SLRTCE. It aims to
              provide students with a platform to learn, practice and showcase
              their skills in various domains of programming such as web
              development, data science, machine learning, competitive
              programming, etc.
            </p>
            <p>
              Codeyantra organizes various events and activities throughout the
              year to engage and motivate the students to enhance their coding
              skills and knowledge. Some of the events and activities include
              workshops on various technologies and tools, webinars by industry
              experts and alumni, hackathons to solve real-world problems,
              competitions to test and improve the coding skills, mentorship
              programs to guide and support the students, etc. Codeyantra also
              collaborates with other technical clubs and communities within and
              outside the college to foster innovation and creativity in the
              field of computer science and engineering.
            </p>
            <p>
              Codeyantra is a platform for aspiring coders to network, grow and
              excel. Codeyantra helps students to develop their logical
              thinking, problem-solving and coding abilities and prepare them
              for the industry and academia. Codeyantra also encourages students
              to participate in national and international coding events and
              challenges such as CodeChef, HackerRank, Hackerearth, Google Code
              Jam, etc. Codeyantra also provides recognition and rewards to the
              outstanding performers and achievers in coding. Codeyantra strives
              to create a community of passionate coders who can contribute to
              the society and the nation through their skills and talents.
            </p>
          </div>
        </div>
      ) || <AboutSkeleton />}
      <Footer />
    </>
  );
};

export default About;
