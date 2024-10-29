import Image from "next/image";
import localFont from "next/font/local";
import { Header } from "@/components/header/Header";
import { OffersBlock } from "@/components/offers-block/OffersBlock";
import manBg from "../images/man-bg.png";
import { useEffect, useState } from "react";
import StoreProvider from "@/store-provider/StoreProvider";
import Modal from "@/components/modal/Modal";
import { HotSalesBlock } from "@/components/hot-sales-block/HotSalesBlock";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [time, setTime] = useState(120); // секунды
  const [showModal, setShowModal] = useState(false);
  const [timerStopped, setTimerStopped] = useState(false);

  useEffect(() => {
    if (showModal) {
      console.log("show modal");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  useEffect(() => {
    if (timerStopped) {
      setShowModal(true);
      console.log(showModal);
    }
  }, [timerStopped]);

  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          setTimerStopped(true);
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className={`${geistSans.variable} ${geistMono.variable} bg-gray-100`}>
      <Header time={time} isTimerStopped={timerStopped}></Header>
      <section className="pr-44 pl-44 pb-[107px]">
        <h2 className="text-center text-title text-main-font font-bold mt-7 uppercase  mb-16 font-Rubik">
          Выберите подходящий тарифный план
        </h2>
        <div className="grid gap-20 grid-cols-mainGrid ">
          <div className="flex justify-end">
            <img className="max-h-[715px]" src={manBg.src} alt="" />
          </div>
          <StoreProvider>
            <OffersBlock time={time}></OffersBlock>
          </StoreProvider>
        </div>
      </section>
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        children={
          <StoreProvider>
            <HotSalesBlock></HotSalesBlock>
          </StoreProvider>
        }
      ></Modal>
    </main>
  );
}
