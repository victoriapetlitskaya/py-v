// Interfaces and types from component PopularCourses

import { CourseDetails } from "./CoursesList/CoursesList.types";

// Component Props
export interface PopularCoursesProps {}

export type CourseFilter =
  | "All Programme"
  | "Ui/Ux Design"
  | "Frontend development"
  | "Backend Development"
  | "Testing";

export interface CoursesList {
  [key: string]: CourseDetails[];
}
