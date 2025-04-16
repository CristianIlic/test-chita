import React, { useState } from "react";

export default function SIIForms() {
  const TABS = [
    {
      id: "empresa",
      label: "SII Empresa",
      description:
        "Vincula tu cuenta del SII Empresa para sincronizar automáticamente tus facturas, recibir ofertas en cuanto las emitas y evita requisitos adicionales en tus operaciones.",
    },
    {
      id: "personal",
      label: "SII Personal",
      description:
        "Vincula tu cuenta SII Personal para sincronizar automáticamente tus facturas y recibir ofertas en cuanto las emitas.",
    },
  ];
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  return (
    <>
      <div className="tabs-container">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}

        <div className="rectangle"></div>
      </div>

      <div className="tab-content">
        {TABS.find((tab) => tab.id === activeTab).description}
      </div>

      <div className="form-container">
        <div className="form-group">
          <label className="form-label">
            Rut {activeTab === "empresa" ? "Empresa" : "Personal"}
          </label>
          <input type="text" className="form-input" />
        </div>
        <div className="form-group">
          <label className="form-label">Contraseña SII</label>
          <input type="password" className="form-input" />
        </div>

        {activeTab === "personal" && (
          <div className="form-group">
            <label className="form-label">Contraseña Personal SII</label>
            <input type="password" className="form-input" />
          </div>
        )}
      </div>
    </>
  );
}
