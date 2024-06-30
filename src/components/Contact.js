import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section pt-4 mt-4">
      <Container>
        <Row className="justify-content-center m-0">
          <Col md={8}>
            <h2 className="text-center mb-4">Contact me</h2>
            <div className="social-icons text-center mt-4">
              <a
                href="https://www.facebook.com/nikola.stojkoski.7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon facebook-icon" />
              </a>
              <a
                href="https://www.instagram.com/nstojkoski/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon instagram-icon" />
              </a>
              <a
                href="mailto:nstojkoski97@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icon email-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon linkedin-icon" />
              </a>
            </div>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your message"
                />
              </Form.Group>

              <div className="text-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="futuristic-button mt-2"
                >
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
