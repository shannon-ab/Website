import React from 'react';

import ContactItem from '../components/ContactItem';
import config from '../../config';

export default function ContactPage() {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact us</h2>

      <div className="container contact-section_info-container">
        <div className="contact-section_info">
          {config.contact.map(function (item, index) {
            return (
              <ContactItem
                key={index}
                title={item.title}
                logoName={item.icon}
                content={item.text}
              ></ContactItem>
            );
          })}
        </div>

        <div className="contact-section_form-container">
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <h2 className="contact-section_form-heading">Send Message</h2>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="contact-section_input-box">
              <input type="text" name="name" required="required"></input>
              <span>Full name</span>
            </div>
            <div className="contact-section_input-box">
              <input type="text" name="email" required="required"></input>
              <span>Email</span>
            </div>
            <div className="contact-section_input-box">
              <textarea name="message" required="required"></textarea>
              <span>Type Message . . .</span>
            </div>
            <div className="contact-section_input-box">
              <input
                className="contact-section_submit-input"
                type="submit"
                name=""
                value="Send"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
