import React from "react";

import { DescriptionProps as Props } from "./Description.types";

const Description: React.FC<Props> = (props) => {
  const { text, customClasses } = props;

  return (
    <p
      className={`text-[2.2rem] leading-[3.5rem] font-normal text-center max-w-[82.8rem] text-grayS11L46 mb-[6rem] ${customClasses}`}
    >
      {text}
    </p>
  );
};

Description.defaultProps = {};

export default Description;
