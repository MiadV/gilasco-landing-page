import React from 'react';
import { Link } from 'react-router-dom';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js';
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from 'reactstrap';

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById('navbar-main'));
    // initialise
    headroom.init();
  }
  render() {
    return (
      <>
        <header className='header-global'>
          <Navbar
            className='navbar-main navbar-transparent navbar-light headroom'
            expand='lg'
            id='navbar-main'
          >
            <Container>
              <NavbarBrand className='mr-lg-5' to='/' tag={Link}>
                <img
                  alt='...'
                  src={require('assets/img/brand/gilasco-text.svg')}
                />
              </NavbarBrand>
              <button className='navbar-toggler' id='navbar_global'>
                <span className='navbar-toggler-icon' />
              </button>
              <UncontrolledCollapse navbar toggler='#navbar_global'>
                <div className='navbar-collapse-header'>
                  <Row>
                    <Col className='collapse-brand' xs='6'>
                      <Link to='/'>
                        <img
                          alt='...'
                          src={require('assets/img/brand/gilasco-text-red.svg')}
                          style={{ width: 100 }}
                        />
                      </Link>
                    </Col>
                    <Col className='collapse-close' xs='6'>
                      <button className='navbar-toggler' id='navbar_global'>
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className='align-items-lg-center ml-lg-auto' navbar>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://www.facebook.com/Gilasco/'
                      id='tooltip333589074'
                      target='_blank'
                    >
                      <i className='fa fa-facebook-square' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        GilasCo on Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip333589074'>
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://www.instagram.com/gilasco/'
                      id='tooltip356693867'
                      target='_blank'
                    >
                      <i className='fa fa-instagram' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        GilasCo on Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip356693867'>
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className='nav-link-icon'
                      href='https://shopee.com.my/gilasco?ref=gilasco.com'
                      id='tooltip356693868'
                      target='_blank'
                    >
                      <i className='fa fa-shopping-cart' />
                      <span className='nav-link-inner--text d-lg-none ml-2'>
                        GilasCo on Shopee
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target='tooltip356693868'>
                      GilasCo on Shopee
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default DemoNavbar;
