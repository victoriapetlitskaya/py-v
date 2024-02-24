// Interfaces and types from component Navbar

import { Dispatch, SetStateAction } from "react";

// Component Props
export interface NavbarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
