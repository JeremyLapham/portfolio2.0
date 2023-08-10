import { Container, Row, Col } from "react-bootstrap";
import { languages, frameworks, productions } from "../../objectsForIcons/skillsIcons";

export default function SkillsCard() {

  return (
    <Container>
      <Row>
        <Col lg={4} md={12} className="d-flex justify-content-center">
          <div className="darkSkills">
            <h4>Languages</h4>
            <Row className="d-flex justify-content-center">
              {languages.map((language: any, idx: number) => {
                return (
                  <Col
                    key={idx}
                    lg={4}
                    md={2}
                    sm={2}
                    className="d-flex flex-column align-items-center justify-content-center icon-width"
                  >
                    {language.icon}
                    <p className="text-font">{language.text}</p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
        <Col lg={4} md={12} className="d-flex justify-content-center">
          <div className="darkSkills">
            <h4>Libraries/Frameworks</h4>
            <Row className="d-flex justify-content-center">
              {frameworks.map((framework: any, idx: number) => {
                return (
                  <Col
                    key={idx}
                    lg={4}
                    md={2}
                    sm={2}
                    className="d-flex flex-column align-items-center justify-content-center icon-width"
                  >
                    {framework.icon}
                    <p className="text-font">{framework.text}</p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
        <Col lg={4} md={12} className="d-flex justify-content-center">
          <div className="darkSkills">
            <h4>Production</h4>
            <Row className="d-flex justify-content-center">
              {productions.map((production: any, idx: number) => {
                return (
                  <Col
                    key={idx}
                    lg={4}
                    md={2}
                    sm={2}
                    className="d-flex flex-column align-items-center justify-content-center icon-width"
                  >
                    {production.icon}
                    <p className="text-font">{production.text}</p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
