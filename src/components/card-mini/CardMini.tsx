import { FC } from "react";
import { PriceParagraphCrossedMini } from "../price-paragraph-crossed-mini/PriceParagraphCrossedMini";
import { PriceParagraph } from "../price-paragraph/PriceParagraph";
import { SaleLabelMini } from "../sale-label-mini/SaleLabelMini";

export const CardMini: FC<{
  itemId: "week" | "month" | "threeMonths";
  name: string;
  salePrice: number;
  price: number;
  discountPercent: number
}> = ({ itemId, name, salePrice, price, discountPercent }) => {
  return (
    <div className="bg-white hover:bg-aqua hover:bg-opacity-5 border-2 border-light-border hover:border-aqua rounded-[20px] relative min-w-[210px] min-h-[197px] duration-200 transition-all">
      <div className="relative mt-[27px] mr-[22px] ml-[22px]">
        <input
          type="radio"
          name="hotSale"
          id={itemId}
          value={""}
          className={`peer appearance-none`}
        />
        <div
          className="h-[11px] w-[11px] peer-checked:bg-aqua absolute top-[6px] right-[6px] rounded-full"
        ></div>
        <div
          className="w-[23px] h-[23px] border-[1.5px] border-radio-border peer-checked:border-aqua absolute top-0 right-0 rounded-full"
        ></div>
      </div>
      <label
        htmlFor={itemId}
        id="hotSale"
        className="absolute inset-0 pt-[26px] pb-[20px] pl-[26px] pr-[36px] rounded-[20px] z-30 opacity-100 cursor-pointer"
      >
        <p className="font-Bebas-Neue text-main-font text-[26px] leading-[26px] mb-3">
          {name}
        </p>
        <div className="flex items-start mb-4">
          <PriceParagraphCrossedMini price={price}></PriceParagraphCrossedMini>
        </div>
        <span className="block pl-[40px] h-[1px] w-[100%] bg-light-border mb-6"></span>
        <div className="flex relative gap-[5px]">
          <PriceParagraph price={salePrice} textSize="46px"></PriceParagraph>
          <div className="relative">
            <SaleLabelMini text={discountPercent}></SaleLabelMini>
          </div>
        </div>
      </label>
    </div>
  );
};
