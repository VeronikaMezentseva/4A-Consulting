import { FC } from "react";

export const CrossedPriceParagraph: FC<{price: number, isSale: boolean}> = ({price, isSale}) => {
  // let saleClasses;
  // if (isSalePrice) {
  //   saleClasses = 'leading-[55px] tracking-tighter text-center fontSize: text-price colors: text-main-font fontFamily: font-PT-Root-UI_Bold';
  // } else {
  //   saleClasses = 'leading-[26.4px] pt-[5px] animate-disappearing text-right line-through decoration-2 fontSize: text-m colors: text-gray-300 fontFamily: font-PT-Root-UI_Medium';
  // }

  return (
      <p className={`leading-[26.4px] pt-[5px] ${isSale ? '' : 'animate-disappearing'} text-right line-through decoration-2 fontSize: text-m colors: text-gray-300 fontFamily: font-PT-Root-UI_Medium`} >{`${price}₽`}</p>
  );
}