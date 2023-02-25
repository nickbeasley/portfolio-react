import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./contact-view.css";

function ContactView() {
  return (
    <Container>
      <h1 className="contact-title">Contact</h1>
      <div className="contact-info">
        Nicholas Beasley <br />
        Evansville, <br />
        Indiana
        <br />
        47712 <br />
        <a href="mailto:nickbeas2010@gmail.com">nickbeas2010@gmail.com</a>
        <br />
        <a
          href="https://www.linkedin.com/in/nicholas-beasley-4a8768ab"
          target="blank"
        >
          LinkedIn
        </a>
        <br />
        <a href="tel:8124801651">Call (812)480-1651</a>
        <br />
      </div>
      <Form
        className="contact-form mx-auto"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <fieldset>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="first-name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="last-name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicTelephone">
            <Form.Label>Telephone:</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter telephone"
              name="phone"
            />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Leave a message..</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength={240}
              placeholder="Type here.."
              name="message"
              required
            />
          </Form.Group>

          <Button className="submit" type="submit">
            Send Message
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}
export default ContactView;
