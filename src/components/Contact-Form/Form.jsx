import React from "react";
import "./form.css";
// import Image from "../../img/contact.png";

const Form = () => {
  return (
    <div className="contact">
      <div className="contact__grid">
        <div className="contact__form">
          <div className="contact__form-title mt-1">
            <h1>Let us here your complain</h1>
          </div>
          <div className="contact__form-grid">
            <div className="form__group">
              <label htmlFor="Name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form__group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className="form__group mt-1">
            <label htmlFor="subject">Subject</label>
            <input type="email" name="subject" />
          </div>
          <div className="form__group mt-1">
            <label htmlFor="message">Message</label>
            <textarea name="message"></textarea>
          </div>
          <div>
            <button className="form__btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
