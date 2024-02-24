import React from "react";
import Link from "next/link";

import { NavbarProps as Props } from "./Navbar.types";
import Button from "@/components/global/Button/Button";
import { scrollHandler } from "@/utils/common.utils";

import Logo from "../../../../public/assets/images/logo.svg";
import HamburgerSVG from "../../../../public/assets/icons/hamburger.svg";
import CloseSVG from "../../../../public/assets/icons/close.svg";
import Lines from "../../../../public/assets/images/lines.svg";

const Navbar: React.FC<Props> = (props) => {
  const { open, setOpen } = props;
  const links = [
    "Home",
    "Popular",
    "Categories",
    "Benefits",
    "Exclusive",
    "Contacts",
  ];

  return (
    <div className="py-[2.4rem] px-[1.2rem] xl:px-[8.2rem] fixed top-0 right-0 w-full bg-lightBlue z-50">
      <div
        className={`flex justify-between items-center w-full lg:hidden ${
          open ? "h-full" : ""
        }`}
      >
        {!open && (
          <div className="w-[2.4rem] h-[2.4rem]" onClick={() => setOpen(true)}>
            <HamburgerSVG />
          </div>
        )}
        {open && (
          <div className="absolute left-0 top-0 h-screen max-h-screen w-screen overflow-hidden bg-lightBlue z-50 py-[2.4rem] px-[1.2rem]">
            <div
              className="w-[2.4rem] h-[2.4rem]"
              onClick={() => setOpen(false)}
            >
              <CloseSVG />
            </div>
            <div className="flex flex-col justify-between mt-[3.2rem] h-full">
              <div className="flex flex-col gap-[2rem] text-[1.8rem] text-grayS27L86 font-medium">
                {links.map((link, i) => (
                  <Link
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    key={i}
                    className="border-b-solid border-b-[0.1rem] border-b-secondary pb-[0.4rem]"
                  >
                    {link}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-[0.8rem] text-[1.8rem] text-primary font-medium pb-[6rem]">
                <a>Log In</a>
                <a className="text-secondary">Sign Up</a>
              </div>
            </div>
          </div>
        )}
        <Logo />
      </div>
      <div className="navbar hidden lg:flex w-full flex-1 justify-between items-center z-20">
        <Logo />
        <div
          className={`flex gap-[2rem] xl:gap-[4rem] text-[1.8rem] text-grayS27L86 font-medium z-20`}
        >
          {links.map((link, i) => (
            <Link
              href={`#${link.toLowerCase()}`}
              key={i}
              className="hover:text-secondary cursor-pointer"
              onClick={scrollHandler}
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="buttons flex gap-[3.2rem]">
          <Button title="Log In" type="white" />
          <Button title="Sign Up" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[-10rem] left-[7rem] z-10">
        <Lines />
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default Navbar;
