import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="#home">Book</Nav.Link>
            <Nav.Link href="#features">Staff</Nav.Link>
            <Nav.Link href="#pricing">Members</Nav.Link>
            <Nav.Link href="#pricing">Lendings</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;