import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/home.css";

function Home() {
  return (
    <Container fluid>
      {/* Welcome Section */}
      <Row className="text-center">
        <Col>
          <h1 style={{ color: "orange" }}>Welcome to Sundaragiri Organic Farm</h1>
        </Col>
      </Row>

      Carousel
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-vector/cow-farm-milk-banner-set_1284-35908.jpg?t=st=1735283741~exp=1735287341~hmac=5f582778b644c27e6bfe5a2735d29e7ef940cf0e6b69e3c6967a7df822460f08&w=740"
            alt="First slide"
            style={{height: "750px"}}

          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Cow Milk</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sidsfarm.com/wp-content/uploads/2022/08/A2-Buffalo-Milk-1536x1536.jpg"
            alt="Second slide"
            style={{height: "750px"}}
          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Buffalo Milk</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sidsfarm.com/wp-content/uploads/2021/08/Cow-Curd.png"
            alt="Third slide"
            style={{height: "800px"}}
          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Cow Curd</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://sidsfarm.com/wp-content/uploads/2021/08/Buffalo-Curd.png"
            alt="First slide"
            style={{height: "800px" }}

          />
          <Carousel.Caption>
          <h3 style={{color:"red"}}>Buffalo Curd</h3>
          <p style={{color:"blue"}}>Contact Number:8341807476</p>
          <p style={{color:"green"}}>Home Delivery Available</p>
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="text-center">
        <Col>
          <h1 style={{ color: "orange" }}>Welcome to Sundaragiri Organic Farm</h1>
        </Col>
      </Row>

      {/* Hero Image */}
      <Row>
        <Col>
          <Image
            style={{ width: "100%" }}
            src="https://www.karimnagardairy.in/wp-content/uploads/2022/05/Cow.jpg"
            alt="Cow"
            fluid
          />
        </Col>
      </Row>

      {/* Tagline */}
      <Row className="text-center my-3">
        <Col>
          <h1 style={{ color: "orange" }}>Natural Taste From The Dairy Farm!</h1>
        </Col>
      </Row>

      {/* Milk Container Image */}
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} className="text-center">
          <img
            src="https://img.freepik.com/premium-photo/milk-container-stainless-steel-bucket-packaging-design_1028476-714.jpg"
            alt="Milk Container"
            style={{ width: "100%" }}
          />
          <h3>Quality tests before our products reach your home</h3>
          <h5>Purity you can trust and test!</h5>
          <p>Raise aquery and allow us to show you home to test the purity of milk!</p>
        </Col>
      </Row>

      {/* Dairy Team Section */}
      <Row className="text-center mt-5">
        <Col>
          <h1 style={{color:"blueviolet"}}>Dairy Team</h1>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {/* Owner Card */}
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <div className="img">
              <Card.Img
                variant="top"
                src="https://www.karimnagardairy.in/wp-content/uploads/2022/05/ADVISOR.jpg"
              />
            </div>
            <Card.Body>
              <Card.Title>V.Hanumantha Reddy/Owner</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        {/* Farmer Card */}
        <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <div className="img">
              <Card.Img
                style={{ width: "280px", height: "360px", objectFit: "cover" }}
                variant="top"
                src="/rb.jpg" // Ensure correct path
              />
            </div>
            <Card.Body>
              <Card.Title>R.Balaiah/Farmer</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div>

      </div>
    </Container>
  );
}

export default Home;
