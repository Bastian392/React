import { Navbar, Nav, Container } from "react-bootstrap";
import ModoNoche from "../ModoNoche/ModoNoche";
import { CartWidget } from "../CartWidget";

const NavbarTop = () => {
  return (

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Inicio</Nav.Link>
              <Nav.Link to="/productos/:id">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
          <ModoNoche />
        </Container>
      </Navbar>

  );
};

export default NavbarTop;
