import { FC } from "react";

export const PriceParagraphMini: FC<{ price: number }> = ({ price }) => {
  return (
    <p
      className={`text-center font-PT-Root-UI_Bold text-[46px] leading-[55px] tracking-tighter text-main-font`}
    >
      {price === 0 ? null : `${price}₽`}
    </p>
  );
};
