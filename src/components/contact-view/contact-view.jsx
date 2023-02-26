import React from "react";
import { Container } from "react-bootstrap";
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
      <div className="contact-form">
        <form
          id="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify
        >
          <input type="hidden" name="Contact" value="Contact Form" />
          <fieldset>
            <legend>Contact Form</legend>
            <label class="contact-form__label" hidden>
              Contact Form
            </label>
            <input
              className="form-item"
              required
              placeholder="First Name"
              name="first-name"
            />
            <input
              className="form-item"
              required
              placeholder="Last Name"
              name="last-name"
            />
            <input
              className="form-item"
              type="email"
              id="contact-email"
              placeholder="Email"
              required
              name="email"
            />
            <input
              className="form-item"
              type="tel"
              id="contact-tel"
              placeholder="Telephone"
              name="phone"
            />
            <textarea
              className="form-item"
              maxlength="240"
              id="contact-message"
              placeholder="Type here"
              required
              name="message"
            ></textarea>
            <input class="input1" type="submit" value="Send Message" />
          </fieldset>
        </form>
      </div>
    </Container>
  );
}
export default ContactView;
