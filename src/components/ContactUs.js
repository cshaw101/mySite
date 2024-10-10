import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Container, TextInput, Textarea, Button, Title } from '@mantine/core';
import './ContactUs.css';

export function ContactUs({ preFilledMessage }) {
  const form = useRef();
  const [name, setName] = useState(''); // State for name input
  const [email, setEmail] = useState(''); // State for email input
  const [message, setMessage] = useState(preFilledMessage || '');
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });
  const [isHoneypotChecked, setIsHoneypotChecked] = useState(false);
  const [isSending, setIsSending] = useState(false); // State to track loading

  useEffect(() => {
    setMessage(preFilledMessage);
  }, [preFilledMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isHoneypotChecked) {
      showNotification('Bot detection triggered, email not sent.', 'error');
      return;
    }

    setIsSending(true); // Set loading state

    emailjs
      .sendForm(
        'service_khcercm',
        'template_wc1xb8i',
        form.current,
        'LiIOyhzea1vOlO5Dy'
      )
      .then((result) => {
        console.log('Message sent:', result.text);
        // Reset the input states after successful submission
        setName(''); // Clear the name field
        setEmail(''); // Clear the email field
        setMessage(''); // Clear the message field
        form.current.reset(); // Clear form for non-controlled components if needed
        showNotification('Your message has been sent successfully!', 'success');
      })
      .catch((error) => {
        console.log('Message failed:', error.text);
        showNotification('Failed to send message. Please try again later.', 'error');
      })
      .finally(() => {
        setIsSending(false); // Reset loading state
      });
  };

  const showNotification = (message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <section id="contact-form-section" className="contact-form-section">
      <Container size="sm" className="contact-form-container">
        <Title order={2} className="contact-title">Contact Us</Title>
        <form ref={form} onSubmit={sendEmail}>
          {/* Controlled input for name */}
          <TextInput
            label="Name"
            name="user_name"
            placeholder="Enter your name"
            required
            className="contact-input"
            value={name} // Controlled input
            onChange={(e) => setName(e.target.value)} // Update state
          />
          {/* Controlled input for email */}
          <TextInput
            label="Email"
            name="user_email"
            type="email"
            placeholder="Enter your email"
            required
            className="contact-input"
            value={email} // Controlled input
            onChange={(e) => setEmail(e.target.value)} // Update state
          />
          {/* Controlled textarea for message */}
          <Textarea
            label="Message"
            name="message"
            placeholder="What are you looking for?"
            required
            className="contact-textarea"
            value={message} // Controlled component for the textarea value
            onChange={(e) => setMessage(e.target.value)} // Update state when the user types
          />

          <div style={{ display: 'none' }}>
            <label>
              If you are a bot, click here
              <input
                type="checkbox"
                name="bot_check"
                onChange={() => setIsHoneypotChecked(true)}
              />
            </label>
          </div>

          {/* Button with loading state */}
          <Button type="submit" className="contact-button" disabled={isSending}>
            {isSending ? (
              <span className="spinner"></span>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>
      </Container>

      {/* Notification Bubble */}
      <div
        className={`notification-bubble ${notification.type} ${notification.visible ? 'visible' : ''}`}
      >
        {notification.message}
      </div>
    </section>
  );
}
