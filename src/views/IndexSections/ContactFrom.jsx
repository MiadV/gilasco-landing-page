import React, { useState, useEffect } from "react";
import validator from "validator";
import classnames from "classnames";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

const Landing = () => {
  const [submitting, SetSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [state, setState] = useState({
    emailFocused: false,
    nameFocused: false,
    subjectFocused: false
  });
  const [values, setValues] = useState({
    email: "",
    fullName: "",
    subject: "",
    message: ""
  });
  const [valid, setValid] = useState({});

  useEffect(() => {}, [submitting, submitted]);

  const handleOnChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let err = {};

    if (!validator.isEmail(values.email)) {
      err.email = "Email is not valid.";
    }
    if (!validator.isLength(values.fullName, { min: 2, max: 30 })) {
      err.fullName = "Full Name seems not valid.";
    }
    if (!validator.isLength(values.subject, { min: 2, max: 100 })) {
      err.subject = "Subject seems not valid.";
    }
    if (!validator.isLength(values.message, { min: 2, max: 255 })) {
      err.message = "Message seems not valid.";
    }

    if (Object.keys(err).length === 0) {
      setValid({});
      SetSubmitting(true);
      //submit
      submitFormData();
    } else {
      setValid(err);
    }
  };

  const submitFormData = async () => {
    const formData = new FormData();

    for (const name in values) {
      formData.append(name, values[name]);
    }

    fetch("https://gilasco.com/contact-us/contact.php", {
      method: "POST",
      body: formData
    })
      .then(res => {
        setTimeout(() => {
          SetSubmitting(false);
          setSubmitted(true);
        }, 2000);
      })
      .catch(error => {
        SetSubmitting(false);
        setSubmitted(true);
      });
  };

  function Submitting() {
    return (
      <>
        <h4 className="mb-1">Sending...</h4>
      </>
    );
  }
  function Submitted() {
    return (
      <>
        <h4 className="mb-1 text-primary">
          Thank you for contacting us. We will be in touch with you very soon.
        </h4>
      </>
    );
  }

  return (
    <>
      <section className="section section-shaped">
        <div className="shape shape-style-1 shape-default">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <Container className="pt-lg pb-300">
          <Row className="text-center justify-content-center">
            <Col lg="10">
              <h2 className="display-3 text-white">Contact Us</h2>
              {/* <p className='lead text-white'>
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice.
                </p> */}
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
      <section className="section section-lg pt-lg-0 section-contact-us">
        <Container>
          <Row className="justify-content-center mt--300">
            <Col lg="8">
              <Card className="bg-gradient-secondary shadow">
                <CardBody className="p-lg-5">
                  {submitting ? (
                    <Submitting />
                  ) : submitted ? (
                    <Submitted />
                  ) : (
                    <>
                      <h4 className="mb-1">Any inquiries?</h4>
                      <p className="mt-0">
                        Your feedback is very important to us.
                      </p>

                      <FormGroup
                        className={classnames("mt-5", {
                          focused: state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Full Name"
                            type="text"
                            name="fullName"
                            onChange={handleOnChange}
                            onFocus={e =>
                              setState({ ...state, nameFocused: true })
                            }
                            onBlur={e =>
                              setState({ ...state, nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            name="email"
                            onChange={handleOnChange}
                            onFocus={e =>
                              setState({ ...state, emailFocused: true })
                            }
                            onBlur={e =>
                              setState({ ...state, emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: state.subjectFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-send" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            onChange={handleOnChange}
                            onFocus={e =>
                              setState({ ...state, subjectFocused: true })
                            }
                            onBlur={e =>
                              setState({ ...state, subjectFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="message"
                          onChange={handleOnChange}
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="danger"
                          size="lg"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Send Message
                        </Button>
                      </div>
                      <div>
                        {Object.keys(valid).length === 4 ? (
                          <p className="mt-2 text-danger">
                            Please fill in all the fields.
                          </p>
                        ) : (
                          Object.keys(valid).map((key, i) => (
                            <p className="mt-0 text-danger" key={i}>
                              {valid[key]}
                            </p>
                          ))
                        )}
                      </div>
                    </>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* SVG separator */}
        <div className="separator separator-bottom separator-skew">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Landing;
