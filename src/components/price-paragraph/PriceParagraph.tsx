import { FC } from "react";
import TextTransition, { presets } from "react-text-transition";

export const PriceParagraph: FC<{ price: number; textSize?: string }> = ({
  price,
  textSize,
}) => {
  const textSizeClass = textSize ? `text-[${textSize}]` : "text-price";
  return (
    <h3
      className={`text-center leading-[55px] tracking-tighter ${textSizeClass} font-PT-Root-UI_Bold text-main-font`}
    >
      {price === 0 ? null : (
        <TextTransition
          springConfig={presets.wobbly}
        >{`${price}₽`}</TextTransition>
      )}
    </h3>
  );
};
