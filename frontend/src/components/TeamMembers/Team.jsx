import React, { useEffect, useState } from "react";
import Id from "./Id";
import "./team.css";
import Footer from "../footer/Footer";
import { getData } from "../../services";
import SkeletonMember from "./skeleton/SkeletonMember";
import Navigation from "../navigation/Navigation";

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectYear, setSelectYear] = useState("2023");
  const [data, setData] = useState([]);
  const leader_data = data.filter(function (data) {
    return data.role === "Leader" || data.role == "leader";
  });
  const core_member = data.filter(function (data) {
    return data.role === "coremember" || data.role == "Coremember";
  });
  const developer = data.filter(function (data) {
    return data.role === "Developer" || data.role == "developer";
  });
  console.log(leader_data.length);

  const _getData = (year) => {
    setIsLoading(true);
    getData.getDataByCollection(`/members/year/${year}`).then((res) => {
      console.log(res);
      setData(res);
      setIsLoading(false);
    });
  };

  const changeYear = (year) => {
    setSelectYear(year);
    _getData(year);
  };

  useEffect(() => {
    _getData(selectYear);
  }, []);
  return (
    <>
      <Navigation page={"Team_members"} />

      <div className="team_members_container">
        <div className="select_batch">
          <button
            className={selectYear === "2023" ? "active" : null}
            onClick={() => changeYear("2023")}
          >
            2023
          </button>
          <button
            className={selectYear === "2024" ? "active" : null}
            onClick={() => changeYear("2024")}
          >
            2024
          </button>
        </div>
        <section>
          {leader_data.length > 0 && (
            <div className="common leader">
              <span>Leader</span>
              <div className="members">
                {isLoading && <SkeletonMember />}
                {!isLoading &&
                  leader_data.map((d) => (
                    <Id
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      name={d.name}
                      role={d.role}
                      facebook={d.facebook}
                      instagram={d.instagram}
                      linkedin={d.linkedin}
                    />
                  ))}
              </div>
            </div>
          )}

          {developer.length > 0 && (
            <div className="common Developer">
              <span>Development Team</span>
              <div className="members">
                {isLoading && <SkeletonMember />}
                {!isLoading &&
                  developer.map((d) => (
                    <Id
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      name={d.name}
                      role={d.role}
                      facebook={d.facebook}
                      instagram={d.instagram}
                      linkedin={d.linkedin}
                    />
                  ))}
              </div>
            </div>
          )}

          {core_member.length > 0 && (
            <div className="common core-members">
              <span>Coremembers</span>
              <div className="members">
                {isLoading && <SkeletonMember />}
                {!isLoading &&
                  core_member.map((d) => (
                    <Id
                      key={d.id}
                      id={d.id}
                      img={d.img}
                      name={d.name}
                      role={d.role}
                      facebook={d.facebook}
                      instagram={d.instagram}
                      linkedin={d.linkedin}
                    />
                  ))}
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Team;
