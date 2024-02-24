import React from "react";
import Image from "next/image";

import { CourseCardProps as Props } from "./CourseCard.types";
import Button from "@/components/global/Button/Button";
import Students from "./Students/Students";
import Prices from "./Prices/Prices";
import CourseDetails from "./CourseDetails/CourseDetails";

const CourseCard: React.FC<Props> = (props) => {
  const { details, isVertical = false } = props;
  const { name, description, price, discount } = details ?? {};
  const { students, image, period } = details ?? {};

  return (
    <div
      className={`${
        isVertical ? "w-[82rem] h-[30rem]" : "w-[29.6rem] h-[42.8rem]"
      } rounded-[1.4rem] overflow-hidden flex ${
        isVertical ? "flex-row" : "flex-col"
      } bg-white shadow-md`}
    >
      <div
        className={`${
          isVertical ? "w-[35.6rem] h-[30rem]" : "w-[29.6rem] h-[17.9rem]"
        } overflow-hidden relative`}
      >
        <Image
          src={image}
          alt={name}
          width={isVertical ? 356 : 296}
          height={isVertical ? 300 : 179}
          className={`${isVertical ? "h-[30rem] w-auto object-cover" : ""}`}
        />
        {isVertical && (
          <div className="absolute right-[1.4rem] bottom-[4rem] bg-white p-[1rem] rounded-[5rem]">
            <Prices price={price} discount={discount} />
          </div>
        )}
      </div>
      <div
        className={`flex flex-col flex-1 justify-between ${
          isVertical
            ? "pt-[3.1rem] pb-[1.3rem] pl-[3.7rem] pr-[5.2rem]"
            : "pt-[2rem] pb-[2.2rem] px-[1.6rem]"
        }  text-[1.2rem] leading-[1.6rem] font-normal font-raleway relative`}
      >
        {!isVertical && (
          <Students
            amount={students}
            customClasses="absolute top-0 right-[3rem] transform translate-y-[-50%]"
          />
        )}
        <CourseDetails
          period={period}
          name={name}
          description={description}
          isVertical={isVertical}
        />
        {isVertical && <Students amount={students} customClasses="w-fit" />}
        {!isVertical && (
          <div className="justify-self-end flex justify-between items-center">
            <Prices price={price} discount={discount} />
            <Button
              title="Enroll Now"
              customClasses="py-[1rem] pl-[2rem] pr-[2rem] font-railway text-[12px]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

CourseCard.defaultProps = {};

export default CourseCard;
