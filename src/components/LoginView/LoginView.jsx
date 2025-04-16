import React, { useState } from "react";
import Modal from "../Modal";
import SIIForms from "./components/SIIForms";
import SecurityMessage from "./components/SecurityMessage";
import SIIFormsActions from "./components/SIIFormsActions";

function LoginView() {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 500);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setIsClosing(false);
  };

  if (showModal)
    return (
      <Modal
        title="SINCRONIZA TU SII Y AGILIZA TUS OPERACIONES"
        content={
          <>
            <SIIForms />
            <SecurityMessage />
          </>
        }
        footer={<SIIFormsActions handleCloseModal={handleCloseModal} />}
        handleCloseModal={handleCloseModal}
        isClosing={isClosing}
      />
    );

  return (
    <div className={`open-modal-container`}>
      <button id="open-modal-btn" onClick={handleShowModal}>
        Abrir Modal
      </button>
    </div>
  );
}

export default LoginView;
