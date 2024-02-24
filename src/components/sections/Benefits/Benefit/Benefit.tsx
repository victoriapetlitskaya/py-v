import React from "react";
import Image from "next/image";

import { BenefitProps as Props } from "./Benefit.types";
import SectionTitle from "@/components/global/SectionTitle/SectionTitle";

const Benefit: React.FC<Props> = (props) => {
  const { benefit } = props;
  const { label, title, image, benefits } = benefit ?? {};
  const { isReverse = false } = props;

  return (
    <div
      className={`flex flex-col ${
        isReverse ? "xl:flex-row-reverse" : "xl:flex-row"
      } gap-[3.2rem] xl:gap-[6rem] w-full justify-center md:items-center`}
    >
      <div className="flex flex-col xl:max-w-[55rem]">
        <div className="text-primary font-medium text-[1.8rem] leading-[2.1rem] tracking-wide bg-grayS0L96 rounded-[1rem] py-[1rem] px-[2.5rem] mb-[1.2rem] xl:mb-[2.4rem] w-fit">
          {label}
        </div>
        <SectionTitle
          title={title}
          color={isReverse ? "secondary" : "primary"}
          customClasses="mb-0 md:mb-[2rem]"
        />
        <div className="mt-[1.6rem] flex flex-col gap-[2rem] xl:gap-[4rem]">
          {benefits.map((benefit, i) => {
            const { icon, text } = benefit;
            return (
              <div
                key={i}
                className="flex gap-[3.2rem] items-center max-w-[60rem]"
              >
                <div className="p-[1.2rem] shadow-md rounded-full flex items-center justify-center">
                  {icon}
                </div>
                <p className="text-[1.8rem] tracking-wide leading-[3.2rem] font-medium text-grayS11L46">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Image src={image} alt={title} width={591} height={418} />
      </div>
    </div>
  );
};

Benefit.defaultProps = {};

export default Benefit;
