import { FC } from "react";
import { PriceParagraphCrossedMini } from "../price-paragraph-crossed-mini/PriceParagraphCrossedMini";
import { PriceParagraph } from "../price-paragraph/PriceParagraph";
import { SaleLabelMini } from "../sale-label-mini/SaleLabelMini";

export const CardMini: FC<{
  itemId: "week" | "month" | "threeMonths";
  name: string;
  salePrice: number;
  price: number;
  discountPercent: number;
}> = ({ itemId, name, salePrice, price, discountPercent }) => {
  return (
    <div className="relative min-h-[197px] min-w-[210px] rounded-[20px] border-2 border-light-border bg-white transition-all duration-200 hover:border-aqua hover:bg-aqua hover:bg-opacity-5">
      <div className="relative ml-[22px] mr-[22px] mt-[27px]">
        <input
          type="radio"
          name="hotSale"
          id={itemId}
          value={""}
          className={`peer appearance-none`}
        />
        <div className="absolute right-[6px] top-[6px] h-[11px] w-[11px] rounded-full peer-checked:bg-aqua"></div>
        <div className="absolute right-0 top-0 h-[23px] w-[23px] rounded-full border-[1.5px] border-radio-border peer-checked:border-aqua"></div>
      </div>
      <label
        htmlFor={itemId}
        id="hotSale"
        className="absolute inset-0 z-30 cursor-pointer rounded-[20px] pb-[20px] pl-[26px] pr-[36px] pt-[26px] opacity-100"
      >
        <p className="mb-3 font-Bebas-Neue text-[26px] leading-[26px] text-main-font">
          {name}
        </p>
        <div className="mb-4 flex items-start">
          <PriceParagraphCrossedMini price={price}></PriceParagraphCrossedMini>
        </div>
        <span className="mb-6 block h-[1px] w-[100%] bg-light-border pl-[40px]"></span>
        <div className="relative flex gap-[5px]">
          <PriceParagraph price={salePrice} textSize="46px"></PriceParagraph>
          <div className="relative">
            <SaleLabelMini text={discountPercent}></SaleLabelMini>
          </div>
        </div>
      </label>
    </div>
  );
};
