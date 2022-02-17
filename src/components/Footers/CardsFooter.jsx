import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <Container className="container-lg">
            <Row>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/gilasco.jpg")}
                  />
                </Card>
                <div className="pt-4 text-center">
                  <h5 className="title">
                    <span className="d-block">Gilasco Pasar Seni</span>
                  </h5>
                  <a href="https://goo.gl/maps/xrS5VJ91xGjSZcwp9">
                    <i className="fa fa-map fa-xs" style={{ color: "#333" }} />
                    <small className="h6 text-muted"> Open Map</small>
                  </a>
                </div>
              </Col>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/gilas-store.jpg")}
                  />
                </Card>
                <div className="pt-4 text-center">
                  <h5 className="title">
                    <span className="d-block">Gilasco Sultan Ismail</span>
                  </h5>
                  <a href="https://goo.gl/maps/s7ppiFTkt9VyAoP8A">
                    <i className="fa fa-map fa-xs" style={{ color: "#333" }} />
                    <small className="h6 text-muted"> Open Map</small>
                  </a>
                </div>
              </Col>
              <Col className="mb-5 mb-md-0" md="4">
                <Card className="card-lift--hover shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/soon.jpg")}
                  />
                </Card>
                <div className="pt-4 text-center">
                  <h5 className="title">
                    <span className="d-block">Gilasco Ampang</span>
                  </h5>
                  <small className="h6 text-muted"> coming soon</small>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className=" text-danger font-weight-light mb-2">
                  Thank you for trusting us!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Let's get in touch on any of these platforms.
                </h4>
              </Col>
              <Col className=" text-lg-center btn-wrapper" lg="6">
                <Button
                  className=" btn-neutral btn-icon-only btn-round"
                  color="facebook"
                  href="https://www.facebook.com/Gilasco/"
                  id="tooltip126536702"
                  target="_blank"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip126536702">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className=" btn-neutral btn-icon-only btn-round ml-1"
                  color="instagram"
                  href="https://www.instagram.com/gilasco/"
                  id="tooltip383967593"
                  target="_blank"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="  btn-icon-only btn-round ml-1"
                  color="warning"
                  href="https://shopee.com.my/gilasco?ref=gilasco.com"
                  id="tooltip383967593"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-shopping-cart" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip383967593">
                  Shopee
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    href="https://tamaygroup.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TamayGroup Sdn Bhd
                  </a>
                  .
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
