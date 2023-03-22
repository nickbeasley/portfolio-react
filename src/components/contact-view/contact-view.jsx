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
        {/* <h1 className="contact-title">Get in touch</h1> */}
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
              <h3>Contact Nicholas:</h3>
              <ul></ul>
              <li>
                Email:{" "}
                <a href="mailto:nickbeas2010@gmail.com" target={"blank"}>
                  nickbeas2010@gmail.com
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/nicholas-beasley-4a8768ab/"
                  target={"blank"}
                >
                  LinkedIn
                </a>
              </li>
              <li>Web Form:</li>
              <label className="contact-form__label" hidden={true}></label>
              <label
                for="contact-name"
                className="contact-form__label"
                hidden={true}
              ></label>
              <input
                className="form-item"
                required
                placeholder="Name (i.e. Johnny Karate)"
                name="name"
                value={name}
                onChange={this.handleChange}
              />{" "}
              <label
                for="contact-email"
                className="contact-form__label"
                hidden={true}
              ></label>{" "}
              <input
                className="form-item"
                type="email"
                id="contact-email"
                placeholder="Email i.e. (mrKarate@email.com)"
                required
                name="email"
                value={email}
                onChange={this.handleChange}
              />{" "}
              <label
                for="contact-message"
                className="contact-form__label"
                hidden={true}
              ></label>
              <textarea
                className="form-item"
                maxLength="240"
                id="contact-message"
                placeholder="Please come work for us!"
                required
                name="message"
                value={message}
                onChange={this.handleChange}
              ></textarea>
              <input className="input1" type="submit" value="Send Message" />
            </fieldset>
          </form>
        </div>{" "}
      </Container>
    );
  }
}
export default ContactView;
