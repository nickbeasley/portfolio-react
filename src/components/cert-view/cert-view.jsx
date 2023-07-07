import React from "react";
import { certifications } from "../logos/logos";
import "./cert-view.css";

function CertView() {
  return (
    <div className="cert-box">
      <div className="cert-logos">
        {certifications.map((certification, index) => (
          <figure key={index}>
            <img
              src={certification.logo}
              alt={certification.name}
              className="cert-logo"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default CertView;
