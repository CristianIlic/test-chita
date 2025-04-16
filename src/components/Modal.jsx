import React from "react";

export default function Modal({
  title,
  content,
  footer,
  handleCloseModal,
  isClosing,
}) {
  return (
    <div className={`modal-container ${isClosing ? "fade-out" : "fade-in"}`}>
      <div className="close-btn-container">
        <button className="close-button" onClick={handleCloseModal}>
          <p>X</p>
        </button>
        <h2 className="modal-title">{title}</h2>
      </div>
      <div className="modal-content">{content}</div>

      <div className="button-container">{footer}</div>
    </div>
  );
}
