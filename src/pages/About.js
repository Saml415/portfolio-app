import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./About.css";

export default function About() {
  return (
    <>
      <div className="aboutsection">
        <h1>About Me</h1>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs={6} md={4}>
              <Image src="/images/me.jpg" />
            </Col>
          </Row>
          <Row>
            <p className="aboutme">
              My name is Sam Lloyd. I am a web developer from San Diego,
              California. I coded on and off again in the past but decided to
              pursue coding and more specifically web development while studying
              Mechanical Engineering in college. I have had experience in
              similar graphic design fields such as being a member of my high
              schools yearbook team where we placed top 3 at the San Diego
              County Fair including 1st place for our division nationally my
              junior year while also receiving personal awards for my spreads. I
              can code effectively in HTML, CSS, Javascript and Python however
              like many developers Im still learning. When I am not coding my
              hobbies include baseball, listening to records and playing video
              games with my friends.
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
}
