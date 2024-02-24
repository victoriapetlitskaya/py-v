//Benefits helper functions and data

import { BenefitDetails } from "./Benefits.types";

import Benefit1 from "../../../../public/assets/images/benefit1.png";
import Benefit2 from "../../../../public/assets/images/benefit2.png";
import SquaresSVG from "../../../../public/assets/icons/squares.svg";
import TwoSquareSVG from "../../../../public/assets/icons/two-squares.svg";
import TeamSVG from "../../../../public/assets/icons/team.svg";

export const benefits: BenefitDetails[] = [
  {
    label: "Benefits",
    title: "Get Student ID card",
    image: Benefit1,
    benefits: [
      {
        icon: <SquaresSVG />,
        text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
      },
      {
        icon: <TwoSquareSVG />,
        text: "TA’s and presenters can be moved to the front of the class.",
      },
      {
        icon: <TeamSVG />,
        text: "Teachers can easily see all students and class data at one time.",
      },
    ],
  },
  {
    label: "Training",
    title: "Staff training",
    image: Benefit2,
    benefits: [
      {
        icon: <SquaresSVG />,
        text: "Teachers don’t get lost in the grid view and have a dedicated Podium space.",
      },
      {
        icon: <TwoSquareSVG />,
        text: "TA’s and presenters can be moved to the front of the class.",
      },
      {
        icon: <TeamSVG />,
        text: "Teachers can easily see all students and class data at one time.",
      },
    ],
  },
];
