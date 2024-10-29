import { FC } from "react";
import starLabel from "../../images/star-label.png";

export const SaleLabelMini: FC<{
  text: number;
}> = ({ text }) => {
  return (
    <div
      className={`absolute -top-[15px] flex h-[50px] w-[50px] items-center justify-center text-[13.33px]`}
    >
      <div className="absolute">
        <p className="PT-Root-UI_Regular font-medium text-white">{`-${text}%`}</p>
      </div>
      <img src={starLabel.src} alt="" />
    </div>
  );
};
