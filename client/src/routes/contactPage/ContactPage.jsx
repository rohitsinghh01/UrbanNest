import React from 'react';
import './ContactPage.scss';

function Contact() {
  return (
    <div className='contactPage'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Contact Us</h1>
          <p className='contact-text'>
            Thank you for your interest in Urban Nest. Please fill out the form
            below and we will get back to you as soon as possible.
          </p>
          <form className='contact-form'>
            <label className='contact-label'>Name:</label>
            <input
              type='text'
              className='contact-input'
              placeholder='Enter your name'
            />

            <label className='contact-label'>Email:</label>
            <input
              type='email'
              className='contact-input'
              placeholder='Enter your email address'
            />

            <label className='contact-label'>Message:</label>
            <textarea
              className='contact-textarea'
              placeholder='Type your message here'
            ></textarea>

            <button type='submit' className='contact-button'>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/contact.jpg' alt='' />
      </div>
    </div>
  );
}

export default Contact;
