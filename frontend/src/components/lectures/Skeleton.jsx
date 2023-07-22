import React from "react";
import "./skeletonL.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLecture = () => {
  return (
    <div className="lecture lectureSkeleton">
      <div className="lect_img">
        <Skeleton circle={true} height={80} width={80} />
      </div>
      <div className="lect_info">
        <p className="info">
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
          <Skeleton height={20} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonLecture;
