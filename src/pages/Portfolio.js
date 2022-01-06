import React from "react";
import "./Portfolio.css";
import Projects from "../components/Project";

export default function Portfolio({}) {
  const projects = [
    {
      name: "Kode Keeper",
      description: "App for holding snippets of code.",
      id: 1,
      link: "https://github.com/Saml415/Kode-Keeper",
      link2: process.env.PUBLIC_URL + "https://kode-keeper.herokuapp.com/",
      image: process.env.PUBLIC_URL + "/images/Kode.png",
    },
    {
      name: "Studio Ghibli Companion App",
      description:
        "App for allowing users to track and find movies by Studio Ghibli.",
      id: 2,
      link: "https://github.com/LemonPocky/ghibli-app",
      link2:
        process.env.PUBLIC_URL + "https://lemonpocky.github.io/ghibli-app/",
      image: process.env.PUBLIC_URL + "/images/Ghibli.jpg",
    },
    {
      name: "Tech-Blog",
      description: "Forum site for posting tech related content",
      id: 3,
      link: "https://github.com/Saml415/tech-blog",
      link2: process.env.PUBLIC_URL + "https://tech-blog-95423.herokuapp.com/",
      image: process.env.PUBLIC_URL + "/images/tech.jpg",
    },
    {
      name: "E-Commerce Back-end",
      description: "Backend program for an e-commerce site",
      id: 4,
      link: "https://github.com/Saml415/e-commerce",
      link2: process.env.PUBLIC_URL + "https://github.com/Saml415/e-commerce",
      image: process.env.PUBLIC_URL + "/images/E-commerce.PNG",
    },
    {
      name: "Weather Forecast App",
      description:
        "App for looking up weather forecasts from a third-party API",
      id: 5,
      link: "https://github.com/Saml415/weather-app",
      link2: process.env.PUBLIC_URL + "https://saml415.github.io/weather-app/",
      image: process.env.PUBLIC_URL + "/images/weather.jpg",
    },
    {
      name: "Budget Tracker",
      description:
        "PWA created to keep track of transactions both on and offline.",
      id: 6,
      link: "https://github.com/Saml415/budget-tracker",
      link2:
        process.env.PUBLIC_URL + "https://budget-tracker-180580.herokuapp.com/",
      image: process.env.PUBLIC_URL + "/images/Budget.png",
    },
  ];

  return (
    <div className="portcontainer">
      {projects.map((card) => (
        <Projects
          className="card"
          name={card.name}
          description={card.description}
          key={card.id}
          link={card.link}
          image={card.image}
          link2={card.link2}
        />
      ))}
    </div>
  );
}
