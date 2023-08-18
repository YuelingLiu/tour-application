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
    <Row style={{ marginTop: '10px' }}>
      <Col
        xs={5}
        sm={12}
        md={4}
        xl={5}
        className="d-flex flex-column justify-content-center align-items-center  custom-col-center"
      >
        <Row className="d-flex flex-column justify-content-center">
          <h1 style={{ fontFamily: 'initial', fontSize: '50px' }}>
            Explore The World
          </h1>
        </Row>

        <Row>
          <p
            style={{
              fontFamily: 'initial',
              fontSize: '25px',
            }}
          >
            No matter where in the world you want to go, we can help you get
            there
          </p>
        </Row>

        <Row>
          {/* Add this line */}
          <Col xs={12} sm={5} md={6} lg={4} xl={4}>
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
          <Col
            xs={7}
            sm={12}
            md={7}
            xl={7}
            style={{ marginTop: '100px' }}
            className="mx-auto text-center"
          >
            <div
              style={{ margin: '0 auto' }}
              className="full-width-image-container"
            >
              <img className="full-width-image" src="hero1.jpeg" alt="hero" />
            </div>
          </Col>
        </Row>
      </Col>

      {/* img (right side) */}

      <Col xs={5} sm={12} md={9} xl={7}>
        <div className="full-width-image-container">
          <img className="full-width-image" src="hero.jpeg" alt="hero" />
        </div>
      </Col>
    </Row>
  );
}

export default Hero;
