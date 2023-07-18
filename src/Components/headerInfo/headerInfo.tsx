import { Row, Col, Container } from "react-bootstrap";
import jeremy from '../../assets/Jeremy2.png'

export default function HeaderInfo() {
  return (
    <Container>
      <Row>
        <Col lg={8} md={12}>
          <div className="darkSummary">
            <h1>Jeremy Lapham - Jr. Web Developer</h1>
            <br />
            <h3 className='text-font'>
              Personally love to build in the Frontend using languages such as
              HTML, CSS, Javascript and Typescript and even using a framework
              such as React or Angular as a tool for building. I also build
              using Bootstrap with some knowledge of Tailwind CSS. I am capable
              to work in Backend using C# or Azure SQL Databases
            </h3>
          </div>
        </Col>
        <Col lg={4} md={12}  className='d-flex justify-content-center'>
          <div className="darkPicture">
            <img className='imageOfMe' src={jeremy} alt='Professional picture of me '/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
