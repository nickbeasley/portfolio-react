import React from "react";
import FullStackCert from "../../images/FullStackCert.png";
import CloudCert from "../../images/CloudCert.png";
import "./cert-view.css";

function CertView() {
  return (
    <div className="cert-box">
      <div className="cert-logos">
        <figure>
          <img
            src={FullStackCert}
            alt="Full Stack Certification"
            className="cert-logo"
          ></img>
        </figure>
        <figure>
          <img
            src={CloudCert}
            alt="Cloud Certification"
            className="cert-logo"
          ></img>
        </figure>
      </div>
    </div>
  );
}
export default CertView;
