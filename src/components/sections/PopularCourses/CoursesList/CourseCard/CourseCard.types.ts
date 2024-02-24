// Interfaces and types from component CourseCard

import { CourseDetails } from "../CoursesList.types";

// Component Props
export interface CourseCardProps {
  details: CourseDetails;
  isVertical?: boolean;
}
