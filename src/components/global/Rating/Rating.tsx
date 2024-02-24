import React from "react";

import { RatingProps as Props } from "./Rating.types";

import StarSVG from "../../../../public/assets/icons/star.svg";
import HalfStarSVG from "../../../../public/assets/icons/halfstar.svg";

const Rating: React.FC<Props> = (props) => {
  return (
    <div className="gap-[0.2rem] flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star}>{star <= 4 ? <StarSVG /> : <HalfStarSVG />}</div>
      ))}
    </div>
  );
};

Rating.defaultProps = {};

export default Rating;
