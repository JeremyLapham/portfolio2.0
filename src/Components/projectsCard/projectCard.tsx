import { Col, Container, Row } from "react-bootstrap";
import "./projectCard.css";

export default function ProjectCard({ project }: { project: any }) {
  let isOdd = project.length % 2 == 1;
  return (
    <Container>
      <Row>
        {project.map((projectItem: any, index: number) => {
          return (
            <Col
              lg={isOdd && project.length === index + 1 ? 12 : 6}
              key={index}
              // className={
              //   isOdd && project.length === index + 1
              //     ? "d-flex justify-content-center"
              //     : ""
              // }
              className='d-flex justify-content-center'
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
                                className="d-flex flex-column align-items-center"
                              >
                                {icon.icon}
                                {icon.text}
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
