import React from "react";

import { BenefitsProps as Props } from "./Benefits.types";
import Benefit from "./Benefit/Benefit";
import { benefits } from "./Benefits.helpers";

const Benefits: React.FC<Props> = (props) => {
  return (
    <div
      id="benefits"
      className="flex flex-col items-center px-[1.2rem] xl:px-[9rem] pb-[11rem] pt-[10rem] lg:pt-[16rem] xl:min-h-screen gap-[4rem] xl:gap-[11rem]"
    >
      {benefits.map((benefit, i) => (
        <Benefit key={i} benefit={benefit} isReverse={!!(i % 4)} />
      ))}
    </div>
  );
};

Benefits.defaultProps = {};

export default Benefits;
