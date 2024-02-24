// Interfaces and types from component CoursesFilters

import { Dispatch, SetStateAction } from "react";

import { CourseFilter } from "../PopularCourses.types";

// Component Props
export interface CoursesFiltersProps {
  activeFilter: CourseFilter;
  setActiveFilter: Dispatch<SetStateAction<CourseFilter>>;
}
