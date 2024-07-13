import React, { useState, useEffect } from "react";
import { ModalProps } from "../../utils/interfaces/pages/carrinho-compra";

const Modal = ({ isOpen, children }:ModalProps) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-70 z-[9999999999] ${
        modalOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[600px] max-h-[42rem] overflow-auto p-4 rounded-md">
        {children}
      </div>
    </div>
  );
};

export default Modal;
