import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className='position-relative'>
          <section className='section section-lg section-hero section-shaped'>
            {/* Background circles */}
            <div className='shape shape-style-1 shape-default'>
              <span className='span-150' />
              <span className='span-50' />
              <span className='span-50' />
              <span className='span-75' />
              <span className='span-100' />
              <span className='span-75' />
              <span className='span-50' />
              <span className='span-100' />
              <span className='span-50' />
              <span className='span-100' />
            </div>
            <Container className='shape-container d-flex align-items-center py-lg'>
              <div className='col px-0'>
                <Row className='align-items-center justify-content-center'>
                  <Col className='text-center' lg='6'>
                    <img
                      alt='...'
                      className='img-fluid'
                      src={require("assets/img/brand/gilasco-full.svg")}
                      style={{ width: "200px", marginBottom: "-10px" }}
                    />

                    <div className='btn-wrapper'>
                      <p
                        className=' lead text-white'
                        style={{ display: "inline-block" }}
                      >
                        <strong>Checkout GilasCo on </strong>
                        <img
                          alt='shopee'
                          src={require("assets/img/brand/shopee.svg")}
                          style={{ width: 100, marginBottom: 5 }}
                        />
                      </p>
                    </div>
                    <div className='btn-wrapper'>
                      <Button
                        className='btn-white btn-icon mb-3 mb-sm-0'
                        href='https://shopee.com.my/gilasco?ref=gilasco.com'
                        size='lg'
                      >
                        <span className='btn-inner--icon mr-1'>
                          <i className='ni ni-cart' />
                        </span>
                        <span className='btn-inner--text'>SHOP NOW</span>
                      </Button>{" "}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className='separator separator-bottom separator-skew zindex-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='none'
                version='1.1'
                viewBox='0 0 2560 100'
                x='0'
                y='0'
              >
                <polygon
                  className='fill-white'
                  points='2560 0 2560 100 0 100'
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
