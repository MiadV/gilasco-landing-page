import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Icons extends React.Component {
  render() {
    return (
      <>
        <section className='section section-lg section-nucleo-icons pb-250'>
          <Container>
            <Row className='justify-content-center'>
              <Col className='text-center' lg='8'>
                <h2 className='display-3'>Products</h2>
                <p className='lead'>
                  Gilasco brings under its roof 17 categories with a range of
                  more than 100+ products.
                </p>
              </Col>
            </Row>
            <div className='blur--hover'>
              <div className='icons-container blur-item mt-5 on-screen'>
                {/* <i className='icon ni ni-diamond' /> */}
                <i className='icon'>
                  <img
                    src={require("../../assets/img/brand/gilasco-shape-red.svg")}
                    alt=''
                    style={{ width: 50 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/gift.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/glasses.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>

                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/bags.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/dinnerware.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/towel.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/travel.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/shoes.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/cosmetic.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/toys.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/clothing.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/electronic.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
                <i className='icon '>
                  <img
                    src={require("../../assets/img/categories/perfume.svg")}
                    alt=''
                    style={{ width: 70 }}
                  />
                </i>
              </div>
              <span className='blur-hidden h4 text-warning '>
                More than 17+ different categories
              </span>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
