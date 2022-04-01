import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="container-contact100">
      <div class="wrap-contact100">
        <form class="contact100-form validate-form">
          <span class="contact100-form-title">Contact Us</span>

          <div
            class="wrap-input100 validate-input bg1"
            data-validate="Please Type Your Name"
          >
            <span class="label-input100">FULL NAME *</span>
            <input
              class="input100"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>

          <div
            class="wrap-input100 validate-input bg1 rs1-wrap-input100"
            data-validate="Enter Your Email (e@a.x)"
          >
            <span class="label-input100">Email *</span>
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="Enter Your Email "
            />
          </div>

          <div class="wrap-input100 bg1 rs1-wrap-input100">
            <span class="label-input100">Phone</span>
            <input
              class="input100"
              type="text"
              name="phone"
              placeholder="Enter Number Phone"
            />
          </div>

          <div
            class="wrap-input100 validate-input bg0 rs1-alert-validate"
            data-validate="Please Type Your Message"
          >
            <span class="label-input100">Message</span>
            <textarea
              class="input100"
              name="message"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <div class="container-contact100-form-btn">
            <button class="contact100-form-btn">
              <span>
                Submit
                <i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
