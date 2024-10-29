import { FC } from "react";
import { SaleLabel } from "../sale-label/SaleLabel";
import { PriceParagraph } from "../price-paragraph/PriceParagraph";
import { CrossedPriceParagraph } from "../crossed-price-paragraph/CrossedPriceParagraph";

export const OfferCardHorizontal: FC<{
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
    <div className="relative flex min-h-[125px]">
      {isSale ? (
        <SaleLabel text={discountPercent} isSale={isSale}></SaleLabel>
      ) : null}
      <div
        className={`flex items-center rounded-3xl border-2 border-gray-600 bg-white pb-7 pl-5 pr-6 pt-11 transition-all duration-200 hover:border-aqua hover:bg-aqua hover:bg-opacity-5`}
      >
        <h3
          className={`fontFamily: mr-5 font-Bebas-Neue text-l uppercase text-main-font`}
        >
          {title}
        </h3>
        <div className={`mr-14`}>
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
          className={`fontFamily: font-PT-Root-UI_Medium text-xxs text-gray-400`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
