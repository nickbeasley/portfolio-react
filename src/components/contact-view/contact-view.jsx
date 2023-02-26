import React from "react";
import { Container } from "react-bootstrap";
import "./contact-view.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class ContactView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
    };
  }
  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { firstName, lastName, email, message, tel } = this.state;
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
            onSubmit={this.handleSubmit}
            id="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
          >
            <input type="hidden" name="contact" value="index.html" />
            <fieldset>
              <legend>Contact Form</legend>
              <label class="contact-form__label" hidden>
                Contact Form
              </label>
              <input
                type={"text"}
                className="form-item"
                required
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
              <input
                type={"text"}
                className="form-item"
                required
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
              <input
                className="form-item"
                type="email"
                id="contact-email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <input
                className="form-item"
                type="tel"
                id="contact-tel"
                placeholder="Telephone"
                name="tel"
                value={tel}
                onChange={this.handleChange}
              />
              <textarea
                className="form-item"
                maxlength="240"
                id="contact-message"
                placeholder="Type here"
                required
                name="message"
                value={message}
                onChange={this.handleChange}
              ></textarea>
              <input class="input1" type="submit" value="Send Message" />
            </fieldset>
          </form>
        </div>
      </Container>
    );
  }
}
export default ContactView;
