import { FC } from "react";

export const Button: FC<{
  text: string;
  animate?: boolean;
  textUpperCase?: boolean;
}> = ({ text, animate, textUpperCase }) => {
  const animateClasses = animate ? "hover:animate-none animate-pulse" : "";
  const uppercaseClasses = textUpperCase ? "uppercase" : "";
  return (
    <button
      className={`${animateClasses} ${uppercaseClasses} mb-[30px] rounded-[60px] bg-accent px-[100px] py-7 font-Rubik font-medium text-white`}
    >
      {text}
    </button>
  );
};
