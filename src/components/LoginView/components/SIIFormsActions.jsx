import React from "react";

export default function SIIFormsActions({ handleCloseModal }) {
  return (
    <>
      <button className="dont-show-button" onClick={handleCloseModal}>
        No volver a mostrar
      </button>
      <div className="action-buttons">
        <button className="close-action" onClick={handleCloseModal}>
          Cerrar
        </button>
        <button className="sync-button" onClick={handleCloseModal}>
          Sincronizar
        </button>
      </div>
    </>
  );
}
