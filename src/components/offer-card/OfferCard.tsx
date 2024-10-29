import { FC, useEffect, useRef, useState } from "react";
import { SaleLabel } from "../sale-label/SaleLabel";
import { PriceParagraph } from "../price-paragraph/PriceParagraph";
import { CrossedPriceParagraph } from "../crossed-price-paragraph/CrossedPriceParagraph";

export const OfferCard: FC<{
  isSale: boolean;
  title: string;
  discountPercent: number;
  fullPrice: number;
  priceWithDiscount: number;
  text: string;
}> = ({
  isSale,
  title,
  discountPercent,
  fullPrice,
  priceWithDiscount,
  text,
}) => {
  return (
    <div className="relative flex min-h-[261px]">
      <SaleLabel text={discountPercent} isSale={isSale}></SaleLabel>
      <div
        className={`flex flex-col rounded-3xl border-2 border-gray-600 bg-white pb-[26px] pl-5 pr-6 pt-[45px] transition-all duration-200 hover:border-aqua hover:bg-aqua hover:bg-opacity-5`}
      >
        <h3
          className={`fontFamily: mb-[21px] font-Bebas-Neue text-l uppercase leading-[30px] text-gray-500`}
        >
          {title}
        </h3>
        <div className={`mb-3`}>
          <div>
            <PriceParagraph price={priceWithDiscount}></PriceParagraph>
          </div>
          <div className={`-mt-3`}>
            <CrossedPriceParagraph
              price={fullPrice}
              isSale={isSale}
            ></CrossedPriceParagraph>
          </div>
        </div>
        <p
          className={`fontFamily: mt-auto text-center font-PT-Root-UI_Medium text-xxs text-gray-400`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
