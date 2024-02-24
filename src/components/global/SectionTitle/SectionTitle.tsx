import React from "react";

import { SectionTitleProps as Props } from "./SectionTitle.types";

import PrimaryLine from "../../../../public/assets/images/underline-primary.svg";

const SectionTitle: React.FC<Props> = (props) => {
  const { title, color = "primary", underlined = false } = props;
  const { customClasses } = props;

  return (
    <div
      className={`flex flex-col w-fit mb-[4rem] text-center xl:text-left items-center xl:items-start font-nunito ${customClasses}`}
    >
      <h1
        className={`text-[4.8rem] font-bold leading-[6.2rem] ${
          color === "primary" ? "text-primary" : "text-secondary"
        }`}
      >
        {title}
      </h1>
      {underlined && (
        <div className="xl:self-end xl:transform xl:translate-x-[4rem]">
          <PrimaryLine
            className={`${
              color === "primary" ? "stroke-secondary" : "stroke-primary"
            }`}
          />
        </div>
      )}
    </div>
  );
};

SectionTitle.defaultProps = {};

export default SectionTitle;
