import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";

import Menu from "../navbar/navbar";
import Footer from "../footer/footer";
import AppRoutes from "../routes/routes";

import "./main-view.css";

function MainView() {
  return (
    <Router>
      <div className="main-view">
        <Container>
          <Menu />
        </Container>
        <Container style={{ flex: 1 }}>
          <AppRoutes />
        </Container>
        <Container>
          <Footer />
        </Container>
      </div>
    </Router>
  );
}

export default MainView;
