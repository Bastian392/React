import { Navbar, Nav, Container } from "react-bootstrap";
import ModoNoche from "../ModoNoche/ModoNoche";
import { CartWidget } from "../CarroDeCompras/CartWidget";


const NavbarTop = () => {
  return (

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/productos/">Productos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
          <ModoNoche />
        </Container>
      </Navbar>

  );
};

export default NavbarTop;
