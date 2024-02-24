//Categories helper functions and data

import { Category } from "./Categories.types";

import BeautySVG from "../../../public/assets/icons/categories/beauty.svg";
import MedicalSVG from "../../../public/assets/icons/categories/medical.svg";
import NutritionSVG from "../../../public/assets/icons/categories/nutrition.svg";
import SportsSVG from "../../../public/assets/icons/categories/sports.svg";

export const categories: Category[] = [
  {
    id: "c1",
    name: "Beauty",
    description:
      "These include courses in skincare, hair artistry, makeup artistry",
    icon: <BeautySVG />,
  },
  {
    id: "c2",
    name: "Medical",
    description: "Molecular biology. Genetics. Biomedical engineering",
    icon: <MedicalSVG />,
  },
  {
    id: "c3",
    name: "Nutrition",
    description:
      "These include courses in nutrition and medical nutrition therapy",
    icon: <NutritionSVG />,
  },
  {
    id: "c4",
    name: "Sports",
    description: "There is a wide range of courses in the sports sector",
    icon: <SportsSVG />,
  },
  {
    id: "c5",
    name: "Web Development",
    description: "History of Photography. Basics of Digital Photography",
    icon: <BeautySVG />,
  },
  {
    id: "c6",
    name: "Photography",
    description:
      "Courses for building websites using popular tools and languages",
    icon: <MedicalSVG />,
  },
];
