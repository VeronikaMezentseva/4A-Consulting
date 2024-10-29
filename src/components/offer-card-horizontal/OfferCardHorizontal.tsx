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
    <div className="flex relative min-h-[125px]">
      {isSale ? <SaleLabel text={discountPercent} isSale={isSale}></SaleLabel> : null}
      <div className={`flex items-center pt-11 pr-6 pl-5 pb-7 bg-white border-2 rounded-3xl border-gray-600 hover:border-aqua hover:bg-aqua hover:bg-opacity-5 duration-200 transition-all`}>
        <h3 className={`mr-5 uppercase text-l text-main-font fontFamily: font-Bebas-Neue`}>
          {title}
        </h3>
        <div className={`mr-14`}>
          <div>
            <PriceParagraph
              price={priceWithDiscount}
            ></PriceParagraph>
          </div>
          <div className={`-mt-3`}>
            <CrossedPriceParagraph price={fullPrice} isSale={isSale}></CrossedPriceParagraph>
          </div>
          
        </div>
        <p className={`text-xxs text-gray-400 fontFamily: font-PT-Root-UI_Medium`}>{text}</p>
      </div>
    </div>
  );
};
