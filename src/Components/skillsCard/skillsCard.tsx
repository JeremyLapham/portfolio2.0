import { Container, Row, Col } from "react-bootstrap";
import {
  SiCsharp,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiSlack,
  SiJira,
  SiNotion,
  SiMicrosoftazure,
  SiGithub,
  SiBulma,
  SiAngular,
  SiDotnet,
  SiAzuredevops
} from "react-icons/si";
import { BsServer } from "react-icons/bs";

export default function SkillsCard() {
  const languages = [
    { icon: <SiJavascript size={50} color="#F0DB4F" />, text: "JavaScript" },
    { icon: <SiHtml5 size={50} color="#e34c26" />, text: "HTML" },
    { icon: <SiCss3 size={50} color="#264de4" />, text: "CSS" },
    { icon: <SiCsharp size={50} color='green' />, text: "C Sharp" },
    { icon: <BsServer size={50} color='#f29111'/>, text: "SQL" },
    { icon: <SiTypescript size={50} color='#007acc' />, text: "TypeScript" }
  ];

  const frameworks = [
    { icon: <SiReact size={50} color="#264de4" />, text: "React" },
    { icon: <SiBootstrap size={50} color='#563d7c'/>, text: "Bootstrap" },
    { icon: <SiReact size={50} color="#264de4" />, text: "React Native" },
    { icon: <SiBulma size={50} color="#23d160" />, text: "Bulma" },
    { icon: <SiAngular size={50} color="#dd1b16" />, text: "Angular" },
    { icon: <SiDotnet size={50} color="#5d2d91" />, text: "Dotnet" }
  ];
  const productions = [
    { icon: <SiSlack size={50} color='#E01E5A'/>, text: "Slack" },
    { icon: <SiJira size={50} color='#0052CC' />, text: "Jira" },
    { icon: <SiNotion size={50} color='white' />, text: "Notion" },
    { icon: <SiMicrosoftazure size={50} color='#008AD7' />, text: "Azure" },
    { icon: <SiGithub size={50} color='white' />, text: "GitHub" },
    { icon: <SiAzuredevops size={50} color='#008AD7' />, text: "DevOps" }
  ];

  return (
    <Container>
      <Row>
        <Col>
          <div className="darkSkills">
            <h4>Languages</h4>
            <Row>
              {languages.map((language: any, idx:number) => {
                return (
                  <Col key={idx} lg={4} className='d-flex flex-column align-items-center'>
                    {language.icon}
                    <p>{language.text}</p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
        <Col>
          <div className="darkSkills">
            <h4>Frameworks</h4>
            <Row>
              {frameworks.map((framework: any, idx:number) => {
                return (
                  <Col key={idx} lg={4} className='d-flex flex-column align-items-center'>
                    {framework.icon}
                    <p>{framework.text}</p>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Col>
        <Col>
          <div className="darkSkills">
            <h4>Production</h4>
            <Row>
              {productions.map((production: any, idx:number) => {
                return (
                  <Col key={idx} lg={4} className='d-flex flex-column align-items-center'>
                    {production.icon}
                    <p>{production.text}</p>
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
