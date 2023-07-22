import React, { useEffect, useState } from "react";
import "./lectureOption.css";
import { getData, utilServices } from "../../services";
import Lectures from "./Lectures";
import { dsa } from "../../assets";
import SkeletonLecture from "./Skeleton";
let data = [
  {
    id: 1,
    img: "./img/dsa.svg",
    title: "DSA(c++)",
    modeOfConduction: "Offline",
    Venue: "5th Floor, Shree LR Tiwari",
    DateAndDay: "01/02/2003",
    Timings: "11:00am to 12:00pm",
    link: "https://www.youtube.com/watch?v=L4CK3j72SfM",
  },
  {
    id: 2,
    img: "./img/dsa.svg",
    title: "DSA(python)",
    modeOfConduction: "Offline",
    Venue: "5th Floor, Shree LR Tiwari",
    DateAndDay: "01/02/2003",
    Timings: "11:00am to 12:00pm",
    link: "https://www.youtube.com/watch?v=L4CK3j72SfM",
  },
  {
    id: 3,
    img: "./img/dsa.svg",
    title: "DSA(java)",
    modeOfConduction: "Offline",
    Venue: "5th Floor, Shree LR Tiwari",
    DateAndDay: "01/11/2022",
    Timings: "11:00am to 12:00pm",
    link: "https://www.youtube.com/watch?v=L4CK3j72SfM",
  },
  {
    id: 4,
    img: "./img/dsa.svg",
    title: "DSA",
    modeOfConduction: "Offline",
    Venue: "5th Floor, Shree LR Tiwari",
    DateAndDay: "01/11/2021",
    Timings: "11:00am to 12:00pm",
    link: "https://www.youtube.com/watch?v=L4CK3j72SfM",
  },
  {
    id: 5,
    img: "./img/dsa.svg",
    title: "DSA",
    modeOfConduction: "Offline",
    Venue: "5th Floor, Shree LR Tiwari",
    DateAndDay: "01/11/2023",
    Timings: "11:00am to 12:00pm",
    link: "https://www.youtube.com/watch?v=L4CK3j72SfM",
  },
  {
    id: 6,
    img: "./img/dsa.svg",
    title: "DSA",
    modeOfConduction: "Offline",
    Venue: "5th Floor, Shree LR Tiwari",
    DateAndDay: "01/11/2021",
    Timings: "11:00am to 12:00pm",
    link: "https://www.youtube.com/watch?v=L4CK3j72SfM",
  },
];
const LectureOption = () => {
  const [lectures, setLectures] = useState([]);
  const [option, setOption] = useState("upcoming");
  const [_data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData.getDataByCollection("lectures").then((res) => {
      setLectures(res);
      setData(
        res.filter((item) => {
          return !utilServices.compare_date(item.DateAndDay);
        })
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="lectureOption">
      <span className="lecture_title">Lectures</span>
      <div className="lectures">
        <button
          onClick={() => {
            setOption("upcoming");
            setData(
              lectures.filter((item) => {
                return !utilServices.compare_date(item.DateAndDay);
              })
            );
          }}
          className={
            option === "upcoming"
              ? "class upComingLectures active"
              : "class upComingLectures"
          }
        >
          Upcoming
        </button>
        <button
          onClick={() => {
            setOption("past");
            setData(
              lectures.filter((item) => {
                return utilServices.compare_date(item.DateAndDay);
              })
            );
          }}
          className={
            option === "past"
              ? "class pastLectures active"
              : "class pastLectures"
          }
        >
          Past
        </button>
      </div>
      <div className="items">
        {isLoading && <SkeletonLecture />}
        {!isLoading &&
          _data.map((item) => (
            <Lectures
              img={dsa}
              id={item.id}
              link={item.link}
              title={item.title}
              modeOfConduction={item.modeOfConduction}
              Venue={item.Venue}
              DateAndDay={item.DateAndDay}
              Timings={item.Timings}
            />
          ))}
      </div>
    </div>
  );
};

export default LectureOption;
