// Interfaces and types from component Footer

import { ReactNode } from "react";

// Component Props
export interface FooterProps {}

export interface Contact {
  icon: ReactNode;
  label?: string;
  value: string;
}

export interface Link {
  title: string;
  links: string[];
}
