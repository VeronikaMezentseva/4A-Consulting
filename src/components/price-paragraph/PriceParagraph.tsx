import { FC } from "react";
import TextTransition, { presets } from "react-text-transition";

export const PriceParagraph: FC<{ price: number; textSize?: string }> = ({
  price,
  textSize
}) => {
  const textSizeClass = textSize ? `text-[${textSize}]` : 'text-price';
  return (
    <h3
      className={`leading-[55px] tracking-tighter text-center ${textSizeClass} text-main-font font-PT-Root-UI_Bold`}
    >
      {price === 0 ? null : <TextTransition springConfig={presets.wobbly}>{`${price}₽`}</TextTransition>}
    </h3>
  );
};
