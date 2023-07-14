import {
  Container,
  Navbar,
  Offcanvas,
  DropdownButton,
  Nav,
  Dropdown,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
} from "react-bootstrap";
import resume from "../../assets/Resume.png";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { useState } from "react";

export default function MyNav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar collapseOnSelect variant="dark" className="navDark" expand="lg">
        <Container>
          <Navbar.Brand href="#jeremy">Jeremy Lapham</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Jeremy Lapham
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3">
                <div className="mb-2">
                  <DropdownButton
                    as={ButtonGroup}
                    id={`dropdown-button-drop-up`}
                    drop="down"
                    variant=""
                    title={`Contacts`}>
                    <Dropdown.Item>jeremyslapham@gmail.com</Dropdown.Item>
                    <Dropdown.Item>(209)-753-9899</Dropdown.Item>
                  </DropdownButton>
                </div>
                <Nav.Link
                  href="#aboutMe"
                  className="navWords"
                  title="About Me"
                  style={{ color: "white" }}>
                  About Me
                </Nav.Link>
                <Nav.Link
                  style={{ color: "white" }}
                  href="#myProjects"
                  className="navWords"
                  title="My Projects">
                  My Projects
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/JeremyLapham"
                  target="_blank"
                  title="My Github">
                  <SiGithub size={30} color="#f5f5f5" />
                </Nav.Link>
                <Nav.Link
                  href="https://www.linkedin.com/in/jeremylapham/"
                  target="_blank"
                  title="My LinkedIn">
                  <SiLinkedin size={30} color="white" />
                </Nav.Link>
                <Nav.Link onClick={handleShow} target="_blank">
                  <BiNews size={35} color="white" title="My Resume" />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal size="lg" show={show} onHide={handleClose}>
        <ModalHeader className="modalBody" closeButton></ModalHeader>
        <ModalBody className="modalBody">
          <iframe className="resume" src={resume} />
        </ModalBody>
      </Modal>
    </>
  );
}
