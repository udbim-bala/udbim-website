import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PopularCourses.css';
import TwoDRebar from '../../assets/Images/Popular1.jpg'
import ThreeDRebar from '../../assets/Images/Popular2.jpg'
import Steel_Detailing from '../../assets/Images/Popular3.jpg'
import Estimation from '../../assets/Images/Popular4.png'

const coursesData = [
  {
    id: 1,
    title: "2D Rebar Detailing - Professional Course",
    image:TwoDRebar,
    description: [
      "Master rebar placement drawings and Bar Bending Schedule (BBS).",
      "Taught using top-rated software"
    ],
    link: "/programs"
  },
  {
    id: 2,
    title: "3D Rebar Detailing - BIM Course",
    image: ThreeDRebar,
    description: [
      "3D BIM workflows, clash detection, and parametric modeling.",
      "Industry-relevant tools included"
    ],
    link: "/programs"
  },
  {
    id: 3,
    title: "Steel Detailing - BIM Course",
    image: Steel_Detailing,
    description: [
      "Covering RCC detailing, IS/ACI standards, and QC checks.",
      "Includes real-world projects"
    ],
    link: "/programs"
  },
  {
    id: 4,
    title: "Rebar Estimation Course",
    image: Estimation,
    description: [
      "Custom programs for firms & academic institutions.",
      "Includes certification & LMS support"
    ],
    link: "/programs"
  }
];

const PopularCourses = () => {
  return (
    <section className="popular-courses">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8}>
            <h5 className="sub-title">Popular Courses</h5>
            <h2 className="main-title">Our Most Enrolled Programs</h2>
          </Col>
        </Row>
        <Row className="g-4">
          {coursesData.map((course) => (
            <Col key={course.id} sm={6} lg={3} className="d-flex">
              <Card className="course-card w-100">
                <div className="card-img-container">
                  <Card.Img variant="top" src={course.image} alt={course.title} />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="course-title fw-bold">{course.title}</Card.Title>
                  <ul className="course-features flex-grow-1">
                    {course.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <Button href={course.link} className="explore-btn mt-auto">
                    Explore Course
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCourses;
