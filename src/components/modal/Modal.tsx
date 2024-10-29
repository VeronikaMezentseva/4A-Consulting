import React, { FC, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import closeIcon from "../../images/close-icon.png";

const Modal: FC<{
  onClose: () => void;
  children: ReactNode;
  showModal: boolean;
}> = ({ onClose, children, showModal }) => {

  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById("modal-root");
  }, [ref.current]);

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
      <div className="fixed top-0 left-0 w-[100%] h-[100%] bg-overlay flex items-center">
        <div className="bg-gray-100 mr-auto ml-auto">
          <div className="relative flex flex-col pt-[61px] pb-[40px] pr-[40px] pl-[40px]">
            <div className="absolute top-0 right-0 mt-[20px] mr-[20px]">
              <a href="#" onClick={handleCloseClick}>
                <img src={closeIcon.src} alt="" />
              </a>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
  );

  return ref.current && showModal ? ReactDOM.createPortal(modalContent, ref.current) : <></>;
};

export default Modal;
