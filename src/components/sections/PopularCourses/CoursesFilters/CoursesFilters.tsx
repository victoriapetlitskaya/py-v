import React from "react";

import { CoursesFiltersProps as Props } from "./CoursesFilters.types";
import { popularCategories } from "../PopularCourses.helpers";
import Filter from "./Filter/Filter";

const CoursesFilters: React.FC<Props> = (props) => {
  const { activeFilter, setActiveFilter } = props;

  return (
    <div className="flex gap-[1.2rem] xl:gap-[2.4rem] flex-wrap mb-[3.2rem] xl:mb-[5.4rem]">
      {popularCategories.map((category, i) => (
        <Filter
          key={i}
          title={category}
          isActive={category === activeFilter}
          setIsActive={setActiveFilter}
        />
      ))}
    </div>
  );
};

CoursesFilters.defaultProps = {};

export default CoursesFilters;
