import { FC } from "react";
import starLabel from "../../images/star-label.png";

export const SaleLabel: FC<{ text: number; isSale: boolean }> = ({
  text,
  isSale,
}) => {
  return (
    <div
      className={`${isSale ? "" : "animate-disappearing"} absolute -top-8 right-0 h-[70px] w-[70px]`}
    >
      <div className="flex h-[70px] w-[70px] items-center justify-center">
        <div className="absolute">
          <p className="PT-Root-UI_Regular text-salePercent font-medium text-white">{`-${text}%`}</p>
        </div>
        <img src={starLabel.src} alt="" />
      </div>
    </div>
  );
};
