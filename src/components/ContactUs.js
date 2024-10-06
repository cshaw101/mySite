import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, TextInput, Textarea, Button, Title } from '@mantine/core';
import './ContactUs.css';

export function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_khcercm',  // Replace with your EmailJS service ID
        'template_wc1xb8i',  // Replace with your EmailJS template ID
        form.current,
        'LiIOyhzea1vOlO5Dy'  // Replace with your EmailJS user ID (public key)
      )
      .then((result) => {
        console.log('Message sent:', result.text);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.log('Message failed:', error.text);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact-form-section" className="contact-form-section">
      <Container size="sm" className="contact-form-container">
        <Title order={2} className="contact-title">Contact Us</Title>
        <form ref={form} onSubmit={sendEmail}>
          <TextInput
            label="Name"
            name="user_name"
            placeholder="Enter your name"
            required
            className="contact-input"
          />
          <TextInput
            label="Email"
            name="user_email"
            type="email"
            placeholder="Enter your email"
            required
            className="contact-input"
          />
          <Textarea
            label="Message"
            name="message"
            placeholder="What are you looking for?"
            required
            className="contact-textarea"
          />
          <Button type="submit" className="contact-button">Send Message</Button>
        </form>
      </Container>
    </section>
  );
}
