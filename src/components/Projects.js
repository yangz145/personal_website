import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/sample.jpg";
import projImg2 from "../assets/img/sample1.png";
import projImg3 from "../assets/img/sample2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Project 4",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project 5",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project 6",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>User-Centric Web Portal Development</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Implemented UI components using React and CSS, and connected front-end functionality to dynamic SQL queries to support real-time data filtering.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Developed both front-end and back-end features for an internal web portal, enabling authenticated users to view personalized content and recommendations.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}