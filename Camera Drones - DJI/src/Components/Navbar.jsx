import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ borderBottom: "2px solid #00000005" }}>
      <Container className='ps-0 pe-0 col-12 ps-xxl-5 pe-xxl-5 ps-xxl-3 pe-xxl-3'>
        <Navbar.Brand className='pe-0 ps-3 pt-2 pb-sm-2 ps-sm-0'>
          <Link to="/">
            <img src="https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg" alt="" height={26} width={45} />
          </Link>
        </Navbar.Brand>
        <Nav.Link className='me-3'>
          <NavLink className="navlink store" to={"/store"}>STORE</NavLink>
        </Nav.Link>
        <Navbar.Toggle className='p-1 me-2 me-sm-0' style={{ border: "none", color: "#000" }} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto pt-3 pb-0 pt-lg-0">
            <Nav.Link className='me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2'>
              <NavLink className="navlink" to={"/"}>Camera Drones</NavLink>
            </Nav.Link>
            <Nav.Link className='me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2'>
              <NavLink className='navlink' to={"/handheld"}>Handheld</NavLink>
            </Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>
              <NavLink className='navlink' to={"/power"}>Power</NavLink>
            </Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>
              <NavLink className='navlink' to={"/education-industry"}>Education & Industry</NavLink>
            </Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>Services</Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>Accessories</Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>Official Refurbished</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "20px" }}><FiSearch /></Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2'>
              <NavLink className='navlink' to={"/cart"} style={{ color: "#303233", fontSize: "20px" }}><BsCart2 /></NavLink>
            </Nav.Link>
            <Nav.Link className='nav-link p-3 pt-2 pb-2 p-lg-2 ps-sm-0 pe-sm-0'>
              <NavLink className="navlink" to={"/login"} style={{ fontSize: "22px" }}><FiUser /></NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;