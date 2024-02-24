// Interfaces and types from component CoursesList

// Component Props
export interface CoursesListProps {
  coursesList: CourseDetails[];
}

export interface CourseDetails {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  period: string;
  students: number;
  image: string;
}
