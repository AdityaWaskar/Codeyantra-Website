import React from "react";
import "./skeleton.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonMember = () => {
  return (
    <div className="id about_skeleton_container">
      <div className="container">
        <div className="_img">
          <Skeleton circle={true} width={150} height={150} />
        </div>
        <div className="name">
          <Skeleton />
        </div>
        <div className="role">
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

export default SkeletonMember;
