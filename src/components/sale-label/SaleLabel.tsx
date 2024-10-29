import { FC } from "react";
import starLabel from "../../images/star-label.png";

export const SaleLabel: FC<{text: number, isSale: boolean}> = ({text, isSale}) => {
  return (
    <div className={`${isSale ? '' : 'animate-disappearing'} absolute right-0 -top-8 w-[70px] h-[70px]`}>
      <div className="w-[70px] h-[70px] flex justify-center items-center">
        <div className="absolute">
          <p className="text-white text-salePercent font-medium PT-Root-UI_Regular">{`-${text}%`}</p>
        </div>
        <img src={starLabel.src} alt="" />
      </div>
    </div>
  );
}