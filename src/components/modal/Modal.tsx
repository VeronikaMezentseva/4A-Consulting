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
    <div className="fixed left-0 top-0 flex h-[100%] w-[100%] items-center bg-overlay">
      <div className="ml-auto mr-auto bg-gray-100">
        <div className="relative flex flex-col pb-[40px] pl-[40px] pr-[40px] pt-[61px]">
          <div className="absolute right-0 top-0 mr-[20px] mt-[20px]">
            <a href="#" onClick={handleCloseClick}>
              <img src={closeIcon.src} alt="" />
            </a>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );

  return ref.current && showModal ? (
    ReactDOM.createPortal(modalContent, ref.current)
  ) : (
    <></>
  );
};

export default Modal;
