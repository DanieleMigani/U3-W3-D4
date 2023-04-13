import { Navbar, Container, Nav } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar bg="dark" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">SPACEFLIGHTNEW</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#news">HOME</Nav.Link>
          <Nav.Link href="#opinion">NEW ARCHIVE</Nav.Link>
          <Nav.Link href="#civil">LAUNCH SCHEDULE</Nav.Link>
          <Nav.Link href="#commercial">MISSION REPORTS</Nav.Link>
          <Nav.Link href="#military">MEMBERS</Nav.Link>
          <Nav.Link href="#sponsored">SHOP</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNav;
