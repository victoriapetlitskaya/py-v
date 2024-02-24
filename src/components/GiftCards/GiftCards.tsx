import React from "react";
import Image from "next/image";

import { GiftCardsProps as Props } from "./GiftCards.types";
import { gitCardsBenefits } from "./GiftCards.helpers";
import Button from "../global/Button/Button";

import Star from "../../../public/assets/icons/star-filled.svg";
import GiftCard from "../../../public/assets/images/gift.png";
import Lines from "../../../public/assets/images/lines.svg";

const GiftCards: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center px-[1.2rem] xl:px-[15rem] lg:pb-[11rem] xl:py-[11rem]">
      <div className="w-full px-[2rem] xl:px-[5.4rem] py-[3rem] bg-secondary rounded-[1.6rem] relative max-w-[120rem]">
        <div>
          <h2 className="max-w-[43rem] text-white text-[4.8rem] leading-[6.2rem] font-bold mb-[1rem]">
            Why You should buy gift cards?
          </h2>
          <div className="flex flex-col gap-[1.2rem]">
            {gitCardsBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-[0.6rem]">
                <div className="w-[2.4rem] h-[2.4rem]">
                  <Star />
                </div>
                <p className="text-[1.4rem] text-white leading-[1.6rem] font-medium tracking-wide">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          <Button
            type="white"
            title="BUY NOW"
            customClasses="mt-[4rem] pt-[1.5rem] pb-[1.5rem] px-[3rem] xl:w-fit relative z-30 text-center"
          />
        </div>
        <div className="hidden xl:block absolute bottom-0 left-[7rem] transform rotate-180 opacity-30">
          <Lines />
        </div>
        <div className="hidden xl:block absolute bottom-[-2rem] right-[2rem] transform translate-x-[7rem]">
          <Image src={GiftCard} alt="gift card" width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

GiftCards.defaultProps = {};

export default GiftCards;
