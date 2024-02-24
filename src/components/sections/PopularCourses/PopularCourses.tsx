import React, { useState, useEffect } from "react";

import { PopularCoursesProps as Props } from "./PopularCourses.types";
import SectionTitle from "../../global/SectionTitle/SectionTitle";
import CoursesFilters from "./CoursesFilters/CoursesFilters";
import { coursesList, popularCategories } from "./PopularCourses.helpers";
import { CourseDetails } from "./CoursesList/CoursesList.types";
import CoursesList from "./CoursesList/CoursesList";

const PopularCourses: React.FC<Props> = (props) => {
  const [activeFilter, setActiveFilter] = useState(popularCategories[0]);
  const [courses, setCourses] = useState<CourseDetails[]>([]);

  useEffect(() => {
    if (activeFilter === "All Programme") {
      const allCourses = Object.values(coursesList).flat();
      setCourses(allCourses);
      return;
    }

    const courses = coursesList[activeFilter] || [];
    setCourses(courses);
  }, [activeFilter]);

  return (
    <div
      id="popular"
      className="flex flex-col pt-[10rem] lg:pt-[16rem] pb-[11rem] px-[1.2rem] xl:px-[9rem] items-center xl:min-h-screen"
    >
      <SectionTitle title="Popular Courses" color="secondary" underlined />
      <CoursesFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <CoursesList coursesList={courses} />
    </div>
  );
};

PopularCourses.defaultProps = {};

export default PopularCourses;
