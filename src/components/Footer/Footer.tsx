import React from "react";

import { FooterProps as Props } from "./Footer.types";
import { contacts, links } from "./Footer.helpers";
import Link from "next/link";
import Input from "../global/Input/Input";
import Button from "../global/Button/Button";

import Logo from "../../../public/assets/images/logo.svg";
import Lines from "../../../public/assets/images/lines.svg";

const Footer: React.FC<Props> = (props) => {
  return (
    <div id="contacts" className="overflow-x-hidden">
      <div className=" mt-[10rem] ml-[-50%] w-[200%] rounded-t-[100%] flex flex-col items-center px-[1.2rem] py-[4rem] lg:py-[11rem] bg-lightBlue text-[1.4rem] text-primary font-medium">
        <div className="w-screen px-[1.6rem] lg:px-[3.2rem] xl:px-[9rem]">
          <div className="self-start mb-[2.8rem] mt-[5rem] xl:mt-0">
            <Logo />
          </div>
          <div className="flex flex-col lg:flex-row gap-[6rem] lg:gap-[2rem] xl:gap-[6rem] justify-between">
            <div className="flex flex-col max-w-[29rem]">
              <div className="flex flex-col gap-[1.7rem]">
                {contacts.map((contact, i) => {
                  const { icon, label, value } = contact ?? {};

                  return (
                    <div key={i} className={`flex items-center gap-[1.2rem]`}>
                      <div className="w-[2.4rem] h-[2.4rem]">{icon}</div>
                      <p className="leading-[2.6rem]">
                        {label && (
                          <span className="font-bold">{`${label}: `}</span>
                        )}
                        <span>{value}</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-[5.6rem]">
              {links.map((section, i) => {
                const { title, links } = section;
                return (
                  <div key={i} className="flex flex-col">
                    <div className="text-[1.5rem] font-bold text-black mb-[3rem]">
                      {title}
                    </div>
                    <div className="flex flex-col gap-[2rem]">
                      {links.map((link, i) => (
                        <Link
                          href=""
                          key={i}
                          className="hover:border-b-[0.1rem] border-primary"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-[2rem] relative z-10">
              <p className="text-center text-[1.5rem] font-normal text-grayS90L12">
                Stay up to date with the latest courses
              </p>
              <Input
                placeholder="Email"
                button={
                  <Button
                    title="Send"
                    customClasses="pt-[1.5rem] pb-[1.5rem]"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-0 right-0 transform rotate-180 translate-x-[40%]">
        <Lines />
      </div>
    </div>
  );
};

Footer.defaultProps = {};

export default Footer;
