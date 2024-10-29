import { FC } from "react";
import { Timer } from "../timer/Timer";

export const Header: FC<{time: number, isTimerStopped: boolean}> = ({time, isTimerStopped}) => {
  return (
    <div className="flex justify-center bg-white gap-4 items-center pt-1 pb-3">
      <h1 className="text-title text-main-font font-PT-Root-UI_Bold">Скидка действует:</h1>
      <Timer time={time} isTimerStopped={isTimerStopped}></Timer>
    </div>
  );
}