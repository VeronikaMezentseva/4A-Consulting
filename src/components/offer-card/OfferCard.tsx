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
    <div className="flex relative min-h-[261px]">
      <SaleLabel text={discountPercent} isSale={isSale}></SaleLabel>
      <div
        className={`flex flex-col pt-[45px] pr-6 pl-5 pb-[26px] bg-white border-2 rounded-3xl border-gray-600 hover:border-aqua hover:bg-aqua hover:bg-opacity-5 duration-200 transition-all`}
      >
        <h3
          className={`mb-[21px] leading-[30px] uppercase text-l text-gray-500 fontFamily: font-Bebas-Neue`}
        >
          {title}
        </h3>
        <div className={`mb-3`}>
          <div>
            <PriceParagraph
              price={priceWithDiscount}
            ></PriceParagraph>
          </div>
          <div className={`-mt-3`}>
            <CrossedPriceParagraph
              price={fullPrice}
              isSale={isSale}
            ></CrossedPriceParagraph>
          </div>
        </div>
        <p
          className={` mt-auto text-xxs text-center text-gray-400 fontFamily: font-PT-Root-UI_Medium`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
