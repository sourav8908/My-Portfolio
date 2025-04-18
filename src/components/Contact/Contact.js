import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
//import Footer from "../Footer"; // Assuming you have a Footer component
import "../../App.css"; // Import your global CSS

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been received.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="wrapper">
      <div className="content">
        <Container fluid className="contact-section" id="contact">
          <Particle />
          <Container style={{ padding: "80px 0" }}>
            <h1 className="section-heading">
              Get in <span className="purple">Touch</span>
            </h1>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="form-col">
                  <Form.Group controlId="contactForm.Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className="form-col">
                  <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="contactForm.Message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  placeholder="Your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button className="submit-btn" variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Container>
        </Container>
      </div>

      
    </div>
  );
}

export default Contact;
