// Interfaces and types from component Button

// Component Props
export interface NewButtonProps {
  type?: NewButtonType;
  title: string;
  customClasses?: string;
  onClick?: () => void;
}

export type NewButtonType = "primary" | "secondary" | "white" | "outline";
