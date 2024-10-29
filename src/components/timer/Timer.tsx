import { FC, useEffect, useRef, useState } from "react";

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
      <span className="before:font-PT-Root-UI_Bold before:content-['минут'] block before:absolute before:fontSize: text-xxs before:bottom-0 colors: text-gray-200 font-bold"></span>
      <div
        className={`${
          isTimeOut ? "animate-pulse text-warn" : ""
        } flex gap-3 text-timer text-aqua font-Bebas-Neue ${animateClasses}`}
      >
        {`${Math.floor(time / 60)}`.padStart(2, "0")}
        <div className="flex flex-col gap-[5px] justify-center">
          <span
            className={`${
              isTimeOut ? "bg-warn" : ""
            } block w-[5px] h-[5px] rounded-[20px] bg-aqua bg-opacity-55`}
          ></span>
          <span
            className={`${
              isTimeOut ? "bg-warn" : ""
            } block w-[5px] h-[5px] rounded-[20px] bg-aqua bg-opacity-55`}
          ></span>
        </div>
        {`${time % 60}`.padStart(2, "0")}
      </div>
      <span className="before:font-PT-Root-UI_Bold before:absolute before:content-['секунд'] before:bottom-0 before:right-0 before:fontSize: text-xxs colors: text-gray-200 font-bold"></span>
    </div>
  );
};
