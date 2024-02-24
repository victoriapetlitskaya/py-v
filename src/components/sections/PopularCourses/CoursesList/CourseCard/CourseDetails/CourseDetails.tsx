import React from "react";

import { CourseDetailsProps as Props } from "./CourseDetails.types";

const CourseDetails: React.FC<Props> = (props) => {
  const { period, name, description, isVertical = true } = props;

  return (
    <div className={`${isVertical ? "" : "mt-[3.2rem]"}`}>
      <p
        className={`text-grayS12L53  ${
          isVertical ? "text-[1.4rem] mb-[1.2rem]" : "mb-[0.8rem]"
        }`}
      >
        {period}
      </p>
      <h2
        className={`text-primary font-extrabold ${
          isVertical
            ? "text-[2.2rem] leading-[3.3rem]"
            : "text-[1.6rem] leading-[2.4rem]"
        }`}
      >
        {name}
      </h2>
      <p
        className={`text-grayS0L30 ${
          isVertical ? "text-[1.4rem] leading-[2.2rem]" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
};

CourseDetails.defaultProps = {};

export default CourseDetails;
