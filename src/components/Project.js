import React from "react";
import { Card } from "react-bootstrap";
function Projects({ name, description, link, link2, image }) {
  console.log(image);
  return (
    <Card>
      <a href={link}>
        <Card.Img src={image} />
      </a>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link2}>Click here to see the App!</a>
      </Card.Body>
    </Card>
  );
}
export default Projects;
