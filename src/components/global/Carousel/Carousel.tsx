import React, { useState, UIEvent, useEffect } from "react";

import { CarouselProps as Props } from "./Carousel.types";
import { debounce } from "@/utils/performance.utils";
import useWindowSize from "@/hooks/custom-hooks/useWindowSize";

const Carousel: React.FC<Props> = (props) => {
  const { length, children, itemWidth, gap, customStyles } = props;
  const [activeItem, setActiveItem] = useState(0);
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  const interval =
    width > 1024 ? itemWidth / 2 : isMobile ? width : itemWidth - gap;

  const scrollToItem = (width: number) => {
    document!.getElementById("content")!.scrollLeft = width;
  };

  const changeActiveItem = (index: number) => {
    if (index === activeItem) return;

    if (index > activeItem) {
      scrollToItem(
        index === length - 1
          ? itemWidth * length
          : itemWidth * (index - 1) + interval
      );
    }

    if (index < activeItem) {
      const width =
        index === 0
          ? 0
          : itemWidth * length - itemWidth * (length - index + 1) + interval;
      scrollToItem(width);
    }

    setActiveItem(index);
  };

  const scrollHandler = debounce((e: UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const scrollLeft = target.scrollLeft;

    if (scrollLeft < itemWidth / 2) {
      setActiveItem(0);
      return;
    }

    if (scrollLeft > itemWidth * (length - 3) + interval) {
      setActiveItem(length - 1);
      return;
    }

    setActiveItem(Math.ceil(scrollLeft / itemWidth));
  }, 100);

  useEffect(() => {
    if (isMobile) return;
    document!.getElementById("content")!.scrollLeft = interval;
  }, [interval, isMobile]);

  return (
    <div className="relative">
      <div
        id="content"
        className={`carousel py-4 xl:p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide ${customStyles}`}
        onScroll={scrollHandler}
      >
        {children}
      </div>
      <div className="w-full mt-[6rem] flex justify-center">
        <div className="flex gap-[1rem]">
          {Array.from(new Array(length)).map((_, i) => (
            <div
              key={i}
              className={`w-[2rem] h-[2rem] rounded-full cursor-pointer bg-primary ${
                i === activeItem ? "opacity-30" : ""
              }`}
              onClick={() => changeActiveItem(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Carousel.defaultProps = {};

export default Carousel;
