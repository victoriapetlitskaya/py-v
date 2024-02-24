import React from "react";

import { ExclusiveBundlesProps as Props } from "./ExclusiveBundles.types";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import Description from "../global/Description/Description";
import Carousel from "../global/Carousel/Carousel";
import { exclusiveCourses } from "./ExclusiveBundles.helpers";
import CourseCard from "../sections/PopularCourses/CoursesList/CourseCard/CourseCard";
import useWindowSize from "@/hooks/custom-hooks/useWindowSize";

const ExclusiveBundles: React.FC<Props> = (props) => {
  const { width } = useWindowSize();
  const isMobile = width < 1024;

  return (
    <div
      id="exclusive"
      className="flex flex-col items-center px-[1.2rem] xl:px-[9rem] pb-[4rem] pt-[10rem] lg:pt-[16rem] xl:min-h-screen"
    >
      <SectionTitle title="Exclusive Bundles" underlined />
      <Description
        text="Vlearning is one powerful online software suite that combines all the tools needed to run a successful school or office."
        customClasses="mb-[8rem]"
      />
      <div className="w-[100vw]">
        <Carousel
          length={exclusiveCourses.length}
          itemWidth={!isMobile ? 920 : width}
          gap={100}
          customStyles={!isMobile ? "gap-[10rem]" : ""}
        >
          {exclusiveCourses.map((course) => (
            <div key={course.id}>
              {isMobile ? (
                <div className={`w-screen flex justify-center`}>
                  <CourseCard details={course} isVertical={!isMobile} />
                </div>
              ) : (
                <CourseCard details={course} isVertical={!isMobile} />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

ExclusiveBundles.defaultProps = {};

export default ExclusiveBundles;
