import React from "react";
import "./aboutSkeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AboutSkeleton = () => {
  return (
    <div className="about_skeleton_container">
      <Skeleton circle={true} height={200} width={200} />
      <div className="mainContent">
        <p>
          <Skeleton count={4} />
        </p>
        <p>
          <Skeleton count={4} />
        </p>
        <p>
          <Skeleton count={5} />
        </p>
      </div>
    </div>
  );
};

export default AboutSkeleton;
