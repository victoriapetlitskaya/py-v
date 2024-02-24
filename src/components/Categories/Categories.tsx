import React, { useState } from "react";

import { CategoriesProps as Props } from "./Categories.types";
import SectionTitle from "../global/SectionTitle/SectionTitle";
import CategoriesList from "./CategoriesList/CategoriesList";
import { categories } from "./Categories.helpers";
import Button from "../global/Button/Button";
import Description from "../global/Description/Description";

const Categories: React.FC<Props> = (props) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      id="categories"
      className="flex flex-col items-center px-[1.2rem] xl:px-[9rem] pt-[10rem] lg:pt-[16rem] xl:min-h-screen"
    >
      <SectionTitle title="Courses category" underlined />
      <Description
        text="Vlearning is one powerful online software suite that combines all the
        tools needed to run a successful school or office."
      />
      <CategoriesList
        categories={showAll ? categories : categories.slice(0, 4)}
      />
      <Button
        type="outline"
        title={showAll ? "Show less" : "View all"}
        customClasses="mt-[6rem] pt-[1.2rem] pb-[1.2rem] px-[6.2rem]"
        onClick={() => setShowAll(!showAll)}
      />
    </div>
  );
};

Categories.defaultProps = {};

export default Categories;
