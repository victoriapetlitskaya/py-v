import React from "react";

import { CategoriesListProps as Props } from "./CategoriesList.types";
import CategoryCard from "./CategoryCard/CategoryCard";

const CategoriesList: React.FC<Props> = (props) => {
  const { categories } = props;

  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-[4rem] flex-wrap max-w-[128rem]">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

CategoriesList.defaultProps = {};

export default CategoriesList;
