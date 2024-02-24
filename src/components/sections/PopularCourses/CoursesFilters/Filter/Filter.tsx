import React from "react";

import { FilterProps as Props } from "./Filter.types";

const Filter: React.FC<Props> = (props) => {
  const { title, isActive, setIsActive } = props;

  return (
    <div
      onClick={() => setIsActive(title)}
      className={`py-[1rem] px-[2rem] border-solid border-[0.1rem] text-[1.2rem] font-medium rounded-[0.5rem] cursor-pointer ${
        isActive
          ? "bg-primary border-primary text-white"
          : "text-grayS0L77 border-grayS0L77"
      }`}
    >
      {title}
    </div>
  );
};

Filter.defaultProps = {};

export default Filter;
