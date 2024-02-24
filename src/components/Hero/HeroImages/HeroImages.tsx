import React from "react";
import Image from "next/image";

import { HeroImagesProps as Props } from "./HeroImages.types";

import StudentImage from "../../../../public/assets/images/student1.png";
import HeroSVG from "../../../../public/assets/images/hero2.svg";
import Calendar from "../../../../public/assets/images/calendar.svg";

const HeroImages: React.FC<Props> = (props) => {
  return (
    <div className="w-full xl:max-w-1/2 md:self-end mt-[4rem] xl:mt-0">
      <div className="transform xl:translate-x-[-10rem] relative">
        <Image
          src={StudentImage}
          alt="student image"
          width={500}
          height={500}
          className="translate-x-[10rem] xl:translate-x-0"
        />
        <div className="p-[0.8rem] xl:w-[30rem] xl:h-[10rem] rounded-[2rem] bg-grayS0L100A6 flex gap-[3.2rem] items-center px-[2.8rem] font-nunito absolute bottom-[1.2rem] xl:bottom-[14rem] xl:left-[-12rem]">
          <Calendar />
          <div className="flex flex-col text-grayS0L35">
            <p className="font-bold text-[2.4rem] ">250k</p>
            <p className="text-[2rem] leading-[3rem] text-grayS10L37">
              Assisted Student
            </p>
          </div>
        </div>
        <div className="hidden xl:block absolute top-[20rem] right-[10rem] w-[6.9rem] h-[6.9rem]">
          <HeroSVG />
        </div>
      </div>
    </div>
  );
};

HeroImages.defaultProps = {};

export default HeroImages;
