// Interfaces and types from component Benefits

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// Component Props
export interface BenefitsProps {}

export interface BenefitDetails {
  label: string;
  image: StaticImageData;
  title: string;
  benefits: Benefit[];
}

export interface Benefit {
  text: string;
  icon: ReactNode;
}
