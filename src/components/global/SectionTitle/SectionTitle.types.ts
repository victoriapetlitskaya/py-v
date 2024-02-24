// Interfaces and types from component SectionTitle

// Component Props
export interface SectionTitleProps {
  title: string;
  color?: TitleColor;
  underlined?: boolean;
  customClasses?: string;
}

type TitleColor = "primary" | "secondary";
