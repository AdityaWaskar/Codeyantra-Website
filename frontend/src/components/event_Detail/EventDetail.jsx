import React from "react";
import "./event_Detail.css";
import SmallPoster from "./SmallPoster";
import { Link } from "react-router-dom";

const EventDetail = () => {
  const data = [
    {
      id: 1,
      icon: "./img/symbol/quiz.svg",
      title: "Quiz",
      type: "left",
    },
    {
      id: 2,
      icon: "./img/symbol/development.svg",
      title: "Development",
      type: "left",
    },
    {
      id: 3,
      icon: "./img/symbol/coding.svg",
      title: "Coding",
      type: "right",
    },
    {
      id: 4,
      icon: "./img/symbol/idea.svg",
      title: "Hackthon",
      type: "right",
    },
  ];

  const data1 = data.filter((item) => {
    return item.type === "left";
  });
  const data2 = data.filter((item) => {
    return item.type === "right";
  });
  return (
    <div className="event_information">
      <div className="symbols">
        <div className="leftSymbols">
          {data1.map((d) => (
            <SmallPoster id={d.id} icon={d.icon} title={d.title} />
          ))}
        </div>
        <div className="rightSymbols">
          {data2.map((d) => (
            <SmallPoster id={d.id} icon={d.icon} title={d.title} />
          ))}
        </div>
      </div>
      <div className="event_content">
        <p className="event_name">
          <b>Our Events</b>
        </p>
        <p className="event_info">
          The best programs are written so that computing machines can perform
          them quickly and so that human beings can understand them clearly. A
          programmer is ideally an essayist who works with traditional aesthetic
          and literary forms as well as mathematical concepts, to communicate
          the way that an algorithm works and to convince a reader that the
          results will be correct.
        </p>
        <p>
          Codeyantra SLRTCE strives to be at the forefront by Developing Login
          Building and Solving Real Life Problems for students while grooming
          and nurturing them.
        </p>
        <Link to={{ pathname: "/about" }} id="next_page">
          {/* <a href="/about" id="next_page"> */}
          <b>
            Know More
            <img
              className="know_more_arrow"
              id="first_arrow"
              src="img/symbol/arrow.svg"
              alt=""
            />
            <img
              className="know_more_arrow"
              id="second_arrow"
              src="img/symbol/arrow.svg"
              alt=""
            />
          </b>
        </Link>
        {/* </a> */}
      </div>
    </div>
  );
};

export default EventDetail;
