import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us A Message. <img src={msg_icon} alt="MESSAGE ICON" />
        </h3>
        <p>
          Fell free to reach out to us here at EDUCITY through our contact
          information below.Your feedback is important to us as we strive to
          provide exceptional service to our entire community.,
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="MAIL" />
            contact@olamiposi2025.x
          </li>
          <li>
            <img src={phone_icon} alt="PHONE" />
            090-246-801-35
          </li>
          <li>
            <img src={location_icon} alt="ADRESSD" />
            77 massachusetts Ave,Oxford <br />
            MA 02139, United States.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Your Name.</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number.</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            reuired
          />
          <label>Write your message here.</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit now. <img src={white_arrow} alt="SUBMIT ARROW" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
