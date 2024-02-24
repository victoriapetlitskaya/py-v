// Interfaces and types from component Carousel

import { ReactNode } from "react";

// Component Props
export interface CarouselProps {
  length: number;
  itemWidth: number;
  gap: number;
  children: ReactNode;
  customStyles?: string;
}
