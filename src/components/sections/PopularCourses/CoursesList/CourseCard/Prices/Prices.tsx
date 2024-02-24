import React from "react";

import { PricesProps as Props } from "./Prices.types";

const Prices: React.FC<Props> = (props) => {
  const { price, discount, customClasses } = props;

  return (
    <div className={`flex items-center gap-[0.8rem] ${customClasses}`}>
      <div className="text-secondary text-[1.7rem] font-bold leading-[2.5rem]">
        {`$ ${discount ? price - (price * discount) / 100 : price}`}
      </div>
      {!!discount && (
        <div className="opacity-50 font-normal leading-[2.2rem] text-grayS40L10 line-through">{`$ ${price}`}</div>
      )}
    </div>
  );
};

Prices.defaultProps = {};

export default Prices;
