import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import avatar from "../assets/erd.jpg";
export default function About(props) {
  return (
    <Row>
      <Col></Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <div className="profile-card">
          <p class="text-center">
            <img
              src={avatar}
              alt="Logo"
              className="avatar border border-primary rounded-circle rounded-sm"
            />
          </p>
        </div>

        <p>
          I am lead front end developer having 8+ years experience. I have a
          passion for software, love learning, and using latest Front end
          development technologies. I enjoy creating tools for people that make
          life easier. So for this purpose, I do not miss the opportunity to
          learn something new.
        </p>

        <p>
          I have studied over 10K Public Github Repos, learn and take the best
          parts.
        </p>

        <p>
          Currently i am working at Metus as Lead Front‐End Developer. In recent
          past, I have worked in projects developed for TURKCELL SUPERONLINE,
          largest GSM operator in Turkey and created some of the HURRIYET.com.tr
          products one of the most visited and biggest news portal of Turkey ‐
          100k ‐ 150k instant visits.
        </p>

        <p>
          I follow latest technologies in my area of expertise. Modern
          javascript frameworks like React, AngularJs, Html5, css3 technologies,
          CSS preprocessor (Sass ‐Less), webpack, babel and other new
          technologies. Loves Node.Js also, using MongoDb. Lately I have worked
          in some large‐scale software and web projects from different
          disciplines. You can find detailed info at projects section.
        </p>
      </Col>
      <Col></Col>
    </Row>
  );
}
