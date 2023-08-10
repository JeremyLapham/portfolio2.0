import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "./Components/navAndFooter/myNav";
import HeaderInfo from "./Components/headerInfo/headerInfo";
import SkillsCard from "./Components/skillsCard/skillsCard";
import ProjectCard from "./Components/projectsCard/projectCard";
import projectSet from "./objectsForIcons/myProjectsObject";
import MyFooter from "./Components/navAndFooter/MyFooter";
import { useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

function App() {
  const [lightAndDark, setLightAndDark] = useState(true);

  const HandleLightOrDark = () => {
    setLightAndDark(!lightAndDark);
  };

  const isDark = lightAndDark ? "dark" : "light";

  const lightOrDarkBtn = () => {
    return (
      <Button variant="" onClick={HandleLightOrDark} style={{border: 'none'}}>
       {isDark === "dark" ? <MdOutlineDarkMode size={30} color="white" /> : <MdOutlineLightMode size={30} color="black" />} 
      </Button>
    );
  };

  return (
    <div data-theme={isDark} className='body'>
      <NavBar lightDarkButton={lightOrDarkBtn} />
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
    </div>
  );
}

export default App;
