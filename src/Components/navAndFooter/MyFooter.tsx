import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
export default function MyFooter() {
  return (
    <>
      <Navbar
        collapseOnSelect
        variant="dark"
        className="footerDark"
        expand="lg"
      >
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <h3>Jeremy Lapham</h3>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <h3>Jr. Web Developer</h3>
            </Nav>
          </Offcanvas.Body>
        </Container>
      </Navbar>
    </>
  );
}
