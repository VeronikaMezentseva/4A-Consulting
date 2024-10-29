import { FC } from "react";

export const Button: FC<{
  text: string;
  animate?: boolean;
  textUpperCase?: boolean;
}> = ({ text, animate, textUpperCase }) => {
  const animateClasses = animate ? 'hover:animate-none animate-pulse' : '';
  const uppercaseClasses = textUpperCase ? 'uppercase' : '';
  return (
    <button className={`${animateClasses} ${uppercaseClasses} py-7 px-[100px] text-white rounded-[60px] bg-accent font-Rubik font-medium mb-[30px]`}>
      {text}
    </button>
  );
};
