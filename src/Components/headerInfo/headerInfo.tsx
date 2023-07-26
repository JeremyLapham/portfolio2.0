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
            I'm a fairly skilled frontend developer proficient in HTML, CSS, JavaScript, and TypeScript, with expertise in React and Angular. I also have backend experience in C# and Azure SQL Databases. Passionate about creating visually appealing and responsive web applications, I strive to deliver high-quality products that make a positive impact
            </h3>
          </div>
        </Col>
        <Col lg={4} md={12}  className='d-flex justify-content-center'>
          <div className="darkPicture">
            <img className='imageOfMe' src={jeremy} alt='Professional picture of me'/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
