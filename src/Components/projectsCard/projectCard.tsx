import { Col, Container, Row } from "react-bootstrap";
import pokemonAPI from "../../assets/pokemon.png";
import "./projectCard.css";
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
  SiAzuredevops,
} from "react-icons/si";
import { BsServer } from "react-icons/bs";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Container>
      <Row>
        {project.map((projectItem: any, index: number) => {
          return (
            <Col key={index} className="d-flex justify-content-start">
              <div className="darkCard">
                <div className="profile-card">
                  <div className="profile-bio">
                    <>
                      <header>
                        <img src={projectItem.img} alt="Project" />
                      </header>
                      <h1>{projectItem.name}</h1>
                      <h2>{projectItem.languages}</h2>
                      <p>{projectItem.description}</p>
                      <Row>
                        {projectItem.languageIcon.map((icon: any, idx: number) => {
                          return (
                            <Col key={idx} className='d-flex flex-column align-items-center'>
                              {icon.icon} 
                              {icon.text} 
                            </Col>
                            )
                          })
                        }
                        </Row>
                        <div className='d-flex justify-content-center'>
                      <a
                        className="checkItOutBtn"
                        href={projectItem.linkToSite}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Check it out!
                      </a>
                        </div>
                    </>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
