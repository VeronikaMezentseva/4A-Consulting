import { FC } from "react";

export const CrossedPriceParagraph: FC<{ price: number; isSale: boolean }> = ({
  price,
  isSale,
}) => {
  return (
    <p
      className={`pt-[5px] leading-[26.4px] ${isSale ? "" : "animate-disappearing"} fontSize: colors: fontFamily: text-right font-PT-Root-UI_Medium text-m text-gray-300 line-through decoration-2`}
    >{`${price}₽`}</p>
  );
};
