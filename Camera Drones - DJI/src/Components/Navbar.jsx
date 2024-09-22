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
    <Navbar collapseOnSelect expand="lg" style={{ borderBottom: "3px solid #00000005" }}>
      <Container className='d-flex ps-0 pe-0 col-12 ps-xxl-5 pe-xxl-5 ps-xxl-3 pe-xxl-3'>
        <Navbar.Brand className='pe-0 ps-3 pt-2 pb-sm-2 ps-sm-0'>
          <Link to="/">
            <img src="https://www1.djicdn.com/dps/78800252c507990e5f033805ae463a99.svg" alt="" height={26} width={45} />
          </Link>
        </Navbar.Brand>
        <Nav.Link className='me-3 mt-2 mt-lg-0'>
          <NavLink className="navlink store" to={"/store"}>STORE</NavLink>
        </Nav.Link>

        <Nav className='d-flex flex-row align-items-center justify-content-center d-lg-none'>
          <Nav.Link className='nav-link me-3' style={{ color: "#303233", fontSize: "20px" }}><FiSearch /></Nav.Link>
          <Nav.Link className='nav-link me-3 mb-1 mb-lg-0'>
            <NavLink className='navlink' to={"/cart"} style={{ color: "#303233", fontSize: "20px" }}><BsCart2 /></NavLink>
          </Nav.Link>
          <Nav.Link className='nav-link'>
            <NavLink className="navlink" to={"/login"} style={{ fontSize: "20px" }}><FiUser /></NavLink>
          </Nav.Link>
        </Nav>

        <Navbar.Toggle className='p-1 me-2 me-sm-0' style={{ border: "none", color: "#000" }} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className='mt-lg-1' id="responsive-navbar-nav">
          <Nav className="me-auto pt-3 pb-2 pt-lg-0">
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
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>
              <NavLink className='navlink' to={"/service"}>Services</NavLink>
            </Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "14px" }}>Accessories</Nav.Link>
          </Nav>
          <Nav className='d-none d-lg-flex'>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2' style={{ color: "#303233", fontSize: "20px" }}>
              <NavLink to={"/store"} style={{color:"#303233"}}><FiSearch /></NavLink>
            </Nav.Link>
            <Nav.Link className='nav-link me-lg-2 p-3 pt-2 pb-2 ps-sm-0 pe-sm-0 p-lg-2'>
              <NavLink className='navlink' to={"/cart"} style={{ color: "#303233", fontSize: "20px" }}><BsCart2 /></NavLink>
            </Nav.Link>
            {/* <Nav.Link className='nav-link p-3 pt-2 pb-2 p-lg-2 ps-sm-0 pe-sm-0' >
              <NavLink className="navlink" to={"/login"} style={{ fontSize: "22px" }}><FiUser /></NavLink>
            </Nav.Link> */}
            <div className="dropdown">
              <Nav.Link id="dropdownMenuButton1" data-bs-toggle="dropdown" className='nav-link account p-3 pt-2 pb-2 p-lg-2 ps-sm-0 pe-sm-0' style={{ fontSize: "22px" }}>
                <FiUser id='account' />
              </Nav.Link>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="navlink dropdown-item pt-2 pb-2" to={"/login"} >Sign In</NavLink>
                </li>
                <li>
                  <NavLink className="navlink dropdown-item pt-2 pb-2" to={"/register"} >Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;