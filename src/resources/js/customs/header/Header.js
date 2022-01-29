import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../../../assets/images/logo2.png';
import headerStyles from '../header/Header.module.css';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className={headerStyles.nav}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className={headerStyles.logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <div className={headerStyles.collapse_container}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navbar.Brand href="/" className='text-white'>
                  Home
                </Navbar.Brand>
                <NavDropdown title={<span className="text-white my-auto">About</span>} href="#features" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#vision_mission">Vision & Mission</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span className="text-white my-auto">Members</span>} href="#features" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#individuals">Individuals</NavDropdown.Item>
                  <NavDropdown.Item href="#members">Members</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span className="text-white my-auto">Research</span>} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#research">Research 1</NavDropdown.Item>
                  <NavDropdown.Item href="#other_reserach">Research 2</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title={<span className="text-white my-auto">Others</span>} id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#funding">Funding Opportunities</NavDropdown.Item>
                  <NavDropdown.Item href="#news">News & Events</NavDropdown.Item>
                  <NavDropdown.Item href="#get_involved">Get Involved</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className={headerStyles.btn_container}>
                <a href="#login">
                  <button
                    type="button"
                    className={`btn ${headerStyles.login}`}
                  >
                    Login
                  </button>
                </a>
                <a href="#signup">
                  <button
                    type="button"
                    className={`btn ${headerStyles.signup}`}
                  >
                    Become A Member
                  </button>
                </a>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;