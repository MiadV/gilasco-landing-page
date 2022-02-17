import React from "react";

// reactstrap components
import { Card, CardImg, Container, Row, Col } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/1.jpg")}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-default"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-default"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h5 className="display-4 font-weight-bold text-white">
                      Definition
                    </h5>
                    <p className="lead text-italic text-white">
                      Gilas means cherry, a shopping spree at Gilasco is a sweet
                      cherry experience for all.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <h3>About Gilasco</h3>
                  <p className="lead">
                    Gilasco born in 2017 and already making its mark on a wide
                    discerning customers.
                  </p>
                  <p>
                    A department store dedicated to serving customers with
                    intelligent consumer & life style products. Our department
                    store brings under its roof 17 categories with a range of
                    more than 100+ products.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default About;
