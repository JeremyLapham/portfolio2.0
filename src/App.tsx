import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./Components/navAndFooter/myNav";
import HeaderInfo from "./Components/headerInfo/headerInfo";
import SkillsCard from "./Components/skillsCard/skillsCard";
import ProjectCard from "./Components/projectsCard/projectCard";
import projectSet from "./projectObject/myProjectsObject"; 
import MyFooter from "./Components/navAndFooter/MyFooter";

function App() {

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row>
          <Col>
            <HeaderInfo />
          </Col>
        </Row>
        <Row>
          <Col>
            <SkillsCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard project={projectSet} />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
