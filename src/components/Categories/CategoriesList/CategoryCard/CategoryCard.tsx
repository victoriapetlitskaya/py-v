import React from "react";

import { CategoryCardProps as Props } from "./CategoryCard.types";
import Button from "@/components/global/Button/Button";

const CategoryCard: React.FC<Props> = (props) => {
  const { category } = props;
  const { name, description, icon } = category;

  return (
    <div className="w-[29rem] h-[32.9rem] flex flex-col rounded-[1.5rem] pt-[3rem] pb-[1.5rem] px-[0.8rem] justify-between items-center hover:shadow-xl">
      <div className="flex flex-col items-center ">
        <div className="w-[5rem] h-[5rem] rounded-full bg-pinkS100L89 flex items-center justify-center relative">
          <div className="">{icon}</div>
        </div>
        <h2 className="text-primary text-[2.7rem] leading-[3.1rem] font-semibold my-[2.4rem]">
          {name}
        </h2>
        <p className="font-medium text-[1.8rem] leading-[2.9rem] text-center  text-grayS11L46">
          {description}
        </p>
      </div>
      <Button
        title="Explore courses"
        customClasses="pt-[1.2rem] pb-[1.2rem] w-fit "
      />
    </div>
  );
};

CategoryCard.defaultProps = {};

export default CategoryCard;
