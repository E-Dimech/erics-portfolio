import React, { Component } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e11i9gm",
        "template_m1onodf",
        // e.target,
        "contactForm",
        "user_h6ZZ3jPTlgQHKcvFnFsYg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    return (
      <div className="contact-section">
        <div className="contact-form">
          <h3 className="contact-form__title">
            HIRE ME, <br />
            CONNECT WITH ME, <br />
            OR TELL ME YOUR SECRETS
          </h3>
          <div className="contact-form__divider"></div>
          <div className="contact-form__socials">
            <a
              className="contact-form__social-icon"
              href="https://linkedin.com/in/eric-dimech"
            >
              <i class="contact-form__social-icon fab fa-linkedin fa-3x"></i>
            </a>
            <a
              className="contact-form__social-icon"
              href="https://github.com/E-Dimech"
            >
              <i class="contact-form__social-icon fab fa-github fa-3x"></i>
            </a>
            <a
              className="contact-form__social-icon"
              href="https://instagram.com/mountaintop86/"
            >
              <i class="contact-form__social-icon fab fa-instagram fa-3x"></i>
            </a>
          </div>
          <div className="contact-form__divider"></div>
          <form
            id="contactForm"
            className="contact-form__container"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <label className="contact-form__label-user">
              <i className="contact-form__icon-user fa fa-user fa-2x"></i>
              <input
                className="contact-form__input"
                placeholder="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label className="contact-form__label-envelope">
              <i className="contact-form__icon-envelope fa fa-envelope fa-2x"></i>
              <input
                className="contact-form__input"
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <label className="contact-form__label-comment">
              <i className="contact-form__icon-comment fa fa-comment fa-2x"></i>
              <textarea
                className="contact-form__input-msg"
                placeholder="Message"
                cols="30"
                rows="5"
                type="text"
                name="message"
                value={this.state.message}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <button className="contact-form__button" type="submit" value="Send">
              <i className="fa fa-paper-plane"></i>Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}
