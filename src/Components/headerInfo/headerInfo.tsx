import { Row, Col, Container } from "react-bootstrap";

export default function HeaderInfo() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="darkSummary">
            <h1>Jeremy Lapham - Jr. Web Developer</h1>
            <br />
            <h3>
              Personally love to build in the Frontend using languages such as
              HTML, CSS, Javascript and Typescript and even using a framework
              such as React or Angular as a tool for building. I also build
              using Bootstrap with some knowledge of Tailwind CSS. I am capable
              to work in Backend using C# or Azure SQL Databases
            </h3>
          </div>
        </Col>
        <Col>
          <div className="darkPicture">
            My Logo will go here
          </div>
        </Col>
      </Row>
    </Container>
  );
}
