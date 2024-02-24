import React from "react";
import Image from "next/image";

import { StudentsProps as Props } from "./Students.types";

import Student1 from "../../../../../../../public/assets/images/students/student1.png";
import Student2 from "../../../../../../../public/assets/images/students/student2.png";
import Student3 from "../../../../../../../public/assets/images/students/student3.png";
import Student4 from "../../../../../../../public/assets/images/students/student4.png";
import Student5 from "../../../../../../../public/assets/images/students/student5.png";

const Students: React.FC<Props> = (props) => {
  const { amount, customClasses } = props;

  const getZIndex = (i: number, length: number) => {
    return length - 1 === i ? "z-auto" : `z-${(length - i) * 10 - 10}`;
  };

  return (
    <div
      className={`rounded-[4rem] py-[0.5rem] px-[1rem] bg-grayS0L98 flex justify-between items-center gap-[1.6rem] ${customClasses}`}
    >
      <div className="flex">
        {[Student1, Student2, Student3, Student4, Student5].map(
          (image, i, arr) => (
            <div
              key={i}
              className={`relative ${getZIndex(
                i,
                arr.length
              )} h-[2.9rem] w-[2.9rem] rounded-full overflow-hidden ${
                i === 0 ? "" : `ml-[-1rem]`
              }`}
            >
              <Image src={image} alt="student" width={29} height={29} />
            </div>
          )
        )}
      </div>
      <div className="text-[1.6rem] leading-[1.8rem] font-medium text-grayS19L18">
        {`+ ${amount} students`}
      </div>
    </div>
  );
};

Students.defaultProps = {};

export default Students;
