import { Container, Row, Col } from "reactstrap";
const AboutPage = () => {
  return (
    <div>
      <Container fluid className="mt-5 mx-4">
        <Row className="align-items-start">
          <Col md="5" xs="11" className="app-info p-3">
            <h2>About creator of this app</h2>
          </Col>
        </Row>
        <Row>
          <Col md="5" xs="11" className="app-info pb-2">
            <p>
              Hi, my name is <strong>Viktor</strong> or as many people call me -{" "}
              <strong>Vittorio</strong>, and I am the developer of this
              application. I am developing this application by utilizing almost
              5 years of experience in tech industry as a Software Quality
              Assurance Engineer, passion about Technology <strong>&&</strong>{" "}
              Coding. I describe myself as someone who is extremely ambitious
              with has an utterly high craving for continuos self-improvement
              and learning new skills. My passion for learning and speaking
              different languages, as well as embracing other cultures has
              greatly influenced my life and even the idea to build this
              application.
            </p>
            <h4>How was the idea born?</h4>
            <p>
              The idea to create this application was born when I started
              attending a coding bootcamp in the beginning of 2023 with a goal
              to improve my existig skills and obtain skills, that I yet had to
              learn, to become a Software Developer. At that time, I was trying
              to come up with some unique, original portfolio project idea.
              Something that would solve real-world problem(s). So, given my
              immigration background, I came up with an idea to help{" "}
              <strong>fellow Ukranians</strong> and other nations. This idea was
              heavily influenced by the fact that a lot of Ukrainians started
              coming to the US thanks to U4U (uniting for Ukraine) program,
              fleeing from the russian invasion to Ukraine that began in early
              2022.
              <br></br>
              Then the initial idea of creating a software solution, that would
              answer all the essential quesitons in a simple to understand way,
              was backed up by my years-long experience living in this country
              and analyzing most common struggles people face.
            </p>
            <p>
              Ironically, it was almost a year that I moved to Austin, and it
              just happened to be that I made quite a few acquintances among
              Ukrainian people - here in Texas.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
