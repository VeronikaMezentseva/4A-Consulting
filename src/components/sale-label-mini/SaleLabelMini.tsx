import { FC } from "react";
import starLabel from "../../images/star-label.png";

export const SaleLabelMini: FC<{
  text: number;
}> = ({ text }) => {
  return (
      <div className={`absolute -top-[15px] w-[50px] h-[50px] flex items-center justify-center text-[13.33px]`}>
        <div className="absolute">
          <p className="text-white font-medium PT-Root-UI_Regular">{`-${text}%`}</p>
        </div>
        <img src={starLabel.src} alt="" />
      </div>
  );
};
