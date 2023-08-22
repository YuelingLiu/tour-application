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
    <Container fluid>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center  custom-col-center">
          <Row className="d-flex flex-column justify-content-center">
            <h1
              style={{
                fontFamily: 'initial',
                fontSize: '70px',
                color: 'white',
              }}
            >
              Explore The World With Our Unforgettable Tours
            </h1>
          </Row>

          <Row>
            <p
              style={{
                fontFamily: 'initial',
                fontSize: '25px',
              }}
            >
              Ready to Embark on a journey of a lifetime? Explore our wide Range
              of tours.
            </p>

            <p
              style={{
                fontFamily: 'initial',
                fontSize: '25px',
              }}
            >
              Each crafted to provide you with a remarkable experience that goes
              beyond the ordinary
            </p>
          </Row>

          <Row>
            {/* Add this line */}
            <Col>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    marginBottom: '10px',
                    width: '150px',
                    height: '100%',
                    fontWeight: 'bold',
                  }}
                  size="lg"
                  variant="success"
                >
                  All Tours
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
