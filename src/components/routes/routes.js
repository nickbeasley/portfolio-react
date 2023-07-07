// routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import MainSection from "../main-section/main-section";
import AboutView from "../about-view/about-view";
import ProjectView from "../project-view/project-view";
import ContactView from "../contact-view/contact-view";
import CertView from "../cert-view/cert-view";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainSection />} />
      <Route path="/about" element={<AboutView />} />
      <Route path="/projects" element={<ProjectView />} />
      <Route path="/certifications" element={<CertView />} />
      <Route path="/contact" element={<ContactView />} />
    </Routes>
  );
}

export default AppRoutes;
