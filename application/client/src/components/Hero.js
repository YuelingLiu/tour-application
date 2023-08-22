import React from 'react';
import './../styling/hero.css';

// Boostrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Hero() {
  return (
    <Container className="container">
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <h1
              style={{
                fontFamily: 'initial',
                fontSize: '70px',
                lineHeight: '1.2', // Increase line height for three lines
                whiteSpace: 'normal', // Allow multiple lines
                color: 'black',
                textAlign: 'left', // Center align horizontally
                marginLeft: '50px',
                display: 'flex', // Enable flex behavior
                flexDirection: 'column', // Arrange children in a column
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
              }}
            >
              Explore The World With Our Unforgettable Tours
            </h1>
          </Row>

          <Row className="d-flex flex-column justify-content-center align-items-center">
            <p
              style={{
                fontFamily: 'initial',
                fontSize: '25px',
                whiteSpace: 'initial',
                color: 'black',
                textAlign: 'center', // Center align horizontally
                display: 'flex', // Enable flex behavior
                flexDirection: 'column', // Arrange children in a column
                justifyContent: 'center', // Center vertically
                alignItems: 'center', // Center horizontally
                marginTop: '50px',
              }}
            >
              Ready to Embark on a journey of a lifetime? Explore our wide Range
              of tours.
            </p>
          </Row>

          <Row style={{ marginBottom: '18px' }}>
            <p>
              Each crafted to provide you with a remarkable experience that goes
              beyond the ordinary
            </p>
          </Row>

          <Row>
            {/* Add this line */}
            <Col>
              <Link to="/" style={{ textDecoration: 'none', font: '30px' }}>
                <Button
                  size="md"
                  variant="outline-success"
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    textDecoration: 'bold',
                  }}
                >
                  Explore All Tours
                </Button>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col style={{ marginTop: '100px' }} className="mx-auto text-center">
              <div
                style={{ margin: '0 auto' }}
                className="full-width-image-container"
              ></div>
            </Col>
          </Row>
        </Col>

        {/* img (right side) */}

        <Col>
          <div className="full-width-image-container">
            <img className="full-width-image" src="hero.jpeg" alt="hero" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
