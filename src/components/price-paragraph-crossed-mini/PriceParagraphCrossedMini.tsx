import { FC } from "react";

export const PriceParagraphCrossedMini: FC<{price: number}> = ({price}) => {
  return (
    <p
      className="font-PT-Root-UI_Bold text-[#2D3242B3] leading-[22px] text-s relative before:absolute before:h-[2px] before:w-[105%] before:bg-warn before:top-[50%] before:-left-[5%] before:rotate-[18deg]
                    after:absolute after:h-[2px] after:w-[105%] after:bg-warn after:top-[50%] after:-left-[5%] after:-rotate-[18deg]
                  "
    >
      {`${price}Р`}
    </p>
  );
};
