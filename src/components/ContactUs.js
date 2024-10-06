import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, TextInput, Textarea, Button, Title } from '@mantine/core';
import './ContactUs.css';

export function ContactUs() {
  const form = useRef();
  const [showNotification, setShowNotification] = useState(false); // Control notification visibility
  const [notificationMessage, setNotificationMessage] = useState(''); // Notification message content
  const [notificationType, setNotificationType] = useState('success'); // success or error

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_khcercm', // Replace with your EmailJS service ID
        'template_wc1xb8i', // Replace with your EmailJS template ID
        form.current,
        'LiIOyhzea1vOlO5Dy' // Replace with your EmailJS user ID (public key)
      )
      .then(
        (result) => {
          setNotificationMessage('Message sent successfully!');
          setNotificationType('success');
          setShowNotification(true); // Show success notification
          form.current.reset(); // Reset the form
          setTimeout(() => setShowNotification(false), 3000); // Auto-dismiss after 3 seconds
        },
        (error) => {
          setNotificationMessage('Failed to send message. Please try again.');
          setNotificationType('error');
          setShowNotification(true); // Show error notification
          setTimeout(() => setShowNotification(false), 3000); // Auto-dismiss after 3 seconds
        }
      );
  };

  return (
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

      {/* Notification bubble */}
      {showNotification && (
        <div className={`notification-bubble ${notificationType}`}>
          {notificationMessage}
        </div>
      )}
    </Container>
  );
}
