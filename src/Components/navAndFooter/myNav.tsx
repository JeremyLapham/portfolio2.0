import {
  Container,
  Navbar,
  Nav,
  Modal,
  ModalHeader,
  ModalBody
} from "react-bootstrap";
import resume from "../../assets/Resume.png";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { BiNews } from "react-icons/bi";
import { useState } from "react";

export default function MyNav({ lightDarkButton }: { lightDarkButton: any }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect variant="dark" className="navDark" expand="lg">
        <Container>
          <Navbar.Brand>
            <div className="d-flex align-items-center">
              <div className="navText">Jeremy Lapham</div>
              {lightDarkButton()}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <hr />
            <Nav className="justify-content-end flex-grow-1 pe-3 navText">
              <Nav.Link className="navText">jeremyslapham@gmail.com</Nav.Link>
              <Nav.Link
                href="https://github.com/JeremyLapham"
                target="_blank"
                title="My Github"
              >
                <SiGithub size={30} className="navText" />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/jeremylapham/"
                target="_blank"
                title="My LinkedIn"
              >
                <SiLinkedin size={30} className="navText" />
              </Nav.Link>
              <Nav.Link onClick={handleShow} target="_blank">
                <BiNews size={35} className="navText" title="My Resume" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
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
