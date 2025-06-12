import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './PopularCourses.css';

import TwoDRebar from '../../assets/Images/Popular1.jpg';
import ThreeDRebar from '../../assets/Images/Popular2.jpg';
import Steel_Detailing from '../../assets/Images/Popular3.jpg';
import Estimation from '../../assets/Images/Popular4.png';

const coursesData = [
  {
    id: 1,
    title: "2D Rebar Detailing - Professional Course",
    image: TwoDRebar,
    description: [
      "Master the fundamentals of 2D rebar detailing. This course trains professionals in preparing accurate reinforcement placing drawings and producing bar bending schedules as per global standards."
    ],
   link: "/programs/courses/1",
  },
  {
    id: 2,
    title: "3D Rebar Detailing - BIM Course",
    image: ThreeDRebar,
    description: [
      "Learn how to model, manage, and visualize reinforcement using Revit in 3D. Equip yourself with hands-on BIM skills aligned with global standards to improve accuracy and efficiency."
    ],
    link: "/programs/courses/2"
  },
  {
    id: 3,
    title: "Steel Detailing - BIM Course",
    image: Steel_Detailing,
    description: [
      "Master 3D structural steel modeling using tools like Tekla Structures. Create precise fabrication drawings, model complex connections, and coordinate with project teams effectively."
    ],
    link: "/programs/courses/3"
  },
  {
    id: 4,
    title: "Rebar Estimation Course",
    image: Estimation,
    description: [
      "Learn to estimate reinforcement quantities from structural drawings using manual and digital tools. Prepare detailed rebar take-offs, cost estimates, and quantity summaries to international standards."
    ],
    link: "/programs/courses/4",
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
          {coursesData.map(course => (
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
