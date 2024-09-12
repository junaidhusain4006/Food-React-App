import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Order any burger from our menu list and we will deliver it to your doorstep in just 30 Minutes. Our fast delevery provides a good food and experience for user.
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 8958145220
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
