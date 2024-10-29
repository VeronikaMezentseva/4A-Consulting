import { Header } from "@/components/header/Header";
import { OffersBlock } from "@/components/offers-block/OffersBlock";
import manBg from "../images/man-bg.png";
import { useEffect, useState } from "react";
import StoreProvider from "@/store-provider/StoreProvider";
import Modal from "@/components/modal/Modal";
import { HotSalesBlock } from "@/components/hot-sales-block/HotSalesBlock";

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
    <main className={`bg-gray-100`}>
      <Header time={time} isTimerStopped={timerStopped}></Header>
      <section className="pb-[107px] pl-44 pr-44">
        <h2 className="mb-16 mt-7 text-center font-Rubik text-title font-bold uppercase text-main-font">
          Выберите подходящий тарифный план
        </h2>
        <div className="grid grid-cols-mainGrid gap-20">
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
