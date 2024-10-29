import { FC } from "react";
import { Timer } from "../timer/Timer";

export const Header: FC<{ time: number; isTimerStopped: boolean }> = ({
  time,
  isTimerStopped,
}) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-white pb-3 pt-1">
      <h1 className="font-PT-Root-UI_Bold text-title text-main-font">
        Скидка действует:
      </h1>
      <Timer time={time} isTimerStopped={isTimerStopped}></Timer>
    </div>
  );
};
