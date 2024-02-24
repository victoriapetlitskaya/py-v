import React from "react";

import { HeroProps as Props } from "./Hero.types";
import Button from "../global/Button/Button";
import Testimonials from "../Testimonials/Testimonials";
import HeroImages from "./HeroImages/HeroImages";

const Hero: React.FC<Props> = (props) => {
  return (
    <div
      id="home"
      className={`pt-[10rem] lg:pt-[16rem] px-[1.2rem] xl:px-[8.2rem] flex flex-col items-center justify-center w-full bg-lightBlue overflow-x-hidden shadow-sm rounded-b-[4rem] xl:min-h-screen`}
    >
      <div className="flex lg:flex-1 flex-col md:flex-row justify-between w-full">
        <div className="left w-full md:w-1/2 flex flex-col justify-center pt-[4rem] md:pt-[5rem] md:pb-[5rem] lg:pt-[10rem] lg:pb-[10rem]">
          <div className="bg-white rounded-[1rem] py-[1rem] px-[2.5rem] mb-[2rem] xl:mb-[1.5rem] w-full md:w-fit text-[1.6rem] text-center">
            Never stop learning
          </div>
          <h1 className="right text-primary font-bold text-[4rem] leading-[5rem] xl:text-[6.4rem] xl:leading-[7.5rem] mb-[2.8rem]">
            Grow up your skills by online courses with Vlearning
          </h1>
          <div className="flex gap-[2.4rem] xl:gap-[1.2rem] items-center flex-col xl:flex-row">
            <Button
              title="EXPLORE PATH"
              type="secondary"
              customClasses="px-[3rem] w-fit"
            />
            <Testimonials />
          </div>
        </div>
        <div className="right flex">
          <HeroImages />
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {};

export default Hero;
