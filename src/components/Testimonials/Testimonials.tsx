import React from "react";
import Image from "next/image";

import { TestimonialsProps as Props } from "./Testimonials.types";
import Rating from "../global/Rating/Rating";

import Person1 from "../../../public/assets/images/person1.png";
import Person2 from "../../../public/assets/images/person2.png";
import Person3 from "../../../public/assets/images/person3.png";

const Testimonials: React.FC<Props> = (props) => {
  return (
    <div className="clients flex">
      <div className="flex mr-[0.8rem]">
        {[Person1, Person2, Person3].map((image, i) => (
          <div
            key={i}
            className={`h-[5.2rem] w-[5.2rem] rounded-full border-primary border-[0.3rem] border-solid overflow-hidden ${
              i === 0 ? "" : `ml-[-1.6rem]`
            }`}
          >
            <Image src={image} alt="person avatar" width={52} height={52} />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <Rating />
        <div className="text-[1.2rem] leading-[2rem] font-semibold">
          (10k+ Reviews)
        </div>
      </div>
    </div>
  );
};

Testimonials.defaultProps = {};

export default Testimonials;
