// Interfaces and types from component Filter

import { Dispatch, SetStateAction } from "react";

import { CourseFilter } from "../../PopularCourses.types";

// Component Props
export interface FilterProps {
  title: CourseFilter;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<CourseFilter>>;
}
