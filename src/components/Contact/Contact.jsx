import React, { Component } from "react";
import emailjs from "emailjs-com";
// import { render } from "node-sass";
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
      <div className="contact-form">
        <h2 className="contact-form__title">Drop me a line...</h2>
        <form
          id="contactForm"
          className="contact_form_class"
          onSubmit={this.handleSubmit.bind(this)}
        >
          <label className="contact-form__label-user">
            <i className="contact-form__icon-user fa fa-user fa-2x"></i>
            <input
              className="contact-form__input"
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
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <label className="contact-form__label-comment">
            <i className="contact-form__icon-comment fa fa-comment fa-2x"></i>
            <textarea
              className="contact-form__input"
              cols="30"
              rows="10"
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
    );
  }
}

// export default function ContactUs() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_e11i9gm",
//         "template_m1onodf",
//         e.target,
//         "user_h6ZZ3jPTlgQHKcvFnFsYg"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//       this.setState({
//         name: "",
//         email: "",
//         message: "",
//       });
//   };
//   render() {
//   return (
//   <>
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   </>
//   );
//   }
// }
