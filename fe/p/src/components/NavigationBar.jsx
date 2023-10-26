import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Product</Navbar.Brand>
          <Nav className="m-auto">
            <Link className="nav-link" to="/add">
              Add
            </Link>
            <Link className="nav-link" to="/">
              All
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
