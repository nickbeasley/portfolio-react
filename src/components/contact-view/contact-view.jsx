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
      name: "",
      email: "",
      message: "",
    };
  }
  handleSubmit = (e) => {
    console.log(this.state);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Contact-Form", ...this.state }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
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
            name="Contact-Form"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="hidden-input" value="index.html" />
            <fieldset>
              <legend>Contact Form</legend>
              <label className="contact-form__label" hidden>
                Contact Form
              </label>
              <input
                className="form-item"
                required
                placeholder="Name"
                name="name"
                value={name}
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
              <textarea
                className="form-item"
                maxLength="240"
                id="contact-message"
                placeholder="Type here"
                required
                name="message"
                value={message}
                onChange={this.handleChange}
              ></textarea>
              <input className="input1" type="submit" value="Send Message" />
            </fieldset>
          </form>
        </div>
      </Container>
    );
  }
}
export default ContactView;
