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
          <h3 className="navText">Jeremy Lapham</h3>
          <h3 className="navText">Jr. Web Developer</h3>
        </Container>
      </Navbar>
    </>
  );
}
