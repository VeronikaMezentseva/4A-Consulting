import { FC } from "react";

export const Timer: FC<{ time: number; isTimerStopped: boolean }> = ({
  time,
  isTimerStopped,
}) => {
  let isTimeOut = false;

  let extraClasses;
  if (time <= 30) {
    isTimeOut = true;
    extraClasses = "warn";
  }

  const animateClasses = isTimerStopped ? "animate-none opacity-50" : "";

  return (
    <div className="relative">
      <span className="before:fontSize: colors: block text-xxs font-bold text-gray-200 before:absolute before:bottom-0 before:font-PT-Root-UI_Bold before:content-['минут']"></span>
      <div
        className={`${
          isTimeOut ? "animate-pulse text-warn" : ""
        } flex gap-3 font-Bebas-Neue text-timer text-aqua ${animateClasses}`}
      >
        {`${Math.floor(time / 60)}`.padStart(2, "0")}
        <div className="flex flex-col justify-center gap-[5px]">
          <span
            className={`${
              isTimeOut ? "bg-warn" : ""
            } block h-[5px] w-[5px] rounded-[20px] bg-aqua bg-opacity-55`}
          ></span>
          <span
            className={`${
              isTimeOut ? "bg-warn" : ""
            } block h-[5px] w-[5px] rounded-[20px] bg-aqua bg-opacity-55`}
          ></span>
        </div>
        {`${time % 60}`.padStart(2, "0")}
      </div>
      <span className="before:fontSize: colors: text-xxs font-bold text-gray-200 before:absolute before:bottom-0 before:right-0 before:font-PT-Root-UI_Bold before:content-['секунд']"></span>
    </div>
  );
};
