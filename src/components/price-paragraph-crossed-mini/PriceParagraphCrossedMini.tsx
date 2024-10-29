import { FC } from "react";

export const PriceParagraphCrossedMini: FC<{ price: number }> = ({ price }) => {
  return (
    <p className="relative font-PT-Root-UI_Bold text-s leading-[22px] text-[#2D3242B3] before:absolute before:-left-[5%] before:top-[50%] before:h-[2px] before:w-[105%] before:rotate-[18deg] before:bg-warn after:absolute after:-left-[5%] after:top-[50%] after:h-[2px] after:w-[105%] after:-rotate-[18deg] after:bg-warn">
      {`${price}Р`}
    </p>
  );
};
