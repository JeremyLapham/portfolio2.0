import { Col, Container, Row } from "react-bootstrap";
import "./projectCard.css";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Container>
      <Row>
        {project.map((projectItem: any, index: number) => {
          return (
            <Col
              key={index}
              className="d-flex justify-content-center"
            >
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
                        {projectItem.languageIcon.map(
                          (icon: any, idx: number) => {
                            return (
                              <Col
                                key={idx}
                                className={`d-flex flex-column align-items-center justify-content-between`}
                              >
                                <div>{icon.icon}</div>
                                <div className={`text-font`}>{icon.text}</div>
                              </Col>
                            );
                          }
                        )}
                      </Row>
                      <div className="d-flex justify-content-center">
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
