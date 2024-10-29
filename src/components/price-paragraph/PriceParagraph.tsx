import { FC } from "react";
import TextTransition, { presets } from "react-text-transition";

export const PriceParagraph: FC<{ price: number }> = ({ price }) => {
  return (
    <h3
      className={`text-center font-PT-Root-UI_Bold text-price leading-[55px] tracking-tighter text-main-font`}
    >
      {price === 0 ? null : (
        <TextTransition
          springConfig={presets.wobbly}
        >{`${price}₽`}</TextTransition>
      )}
    </h3>
  );
};