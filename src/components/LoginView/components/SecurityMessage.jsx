import React from "react";

export default function SecurityMessage() {
  return (
    <div className="security-message">
      <svg
        className="lock-icon"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
      <p>
        Tus credenciales estarán encriptadas y solo podremos leer información,
        sin realizar ningún cambio. Además en cualquier momento podrás
        desactivarla desde el menú Sincronizaciones
      </p>
    </div>
  );
}
