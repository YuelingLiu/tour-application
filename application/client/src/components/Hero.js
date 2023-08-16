import React from 'react';
import './../styling/hero.css';

// Boostrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <Container className="container">
      <Row>
        <Col xs={5} sm={12} md={5} xl={5} className="leftSide">
          <Row className="d-flex justify-content-center">
            <h1>Explore The World</h1>
          </Row>
          <Row>
            <p>
              No matter where in the world you want to go, we can help you get
              there
            </p>
          </Row>
          <Row>
            <Col xs={12} sm={5} md={6} lg={4} xl={4}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  style={{ marginBottom: '10px' }}
                  size="md"
                  variant="success"
                >
                  Explore All Tours Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>

        {/* img (right side) */}
        <Col xs={7} sm={12} md={7} xl={7}>
          <div className="full-width-image-container">
            <img className="full-width-image" src="hero.jpeg" alt="hero" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
