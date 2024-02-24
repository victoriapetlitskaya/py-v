// Interfaces and types from component Button

// Component Props
export interface ButtonProps {
  type?: ButtonType;
  title: string;
  customClasses?: string;
  onClick?: () => void;
}

export type ButtonType = "primary" | "secondary" | "white" | "outline";
