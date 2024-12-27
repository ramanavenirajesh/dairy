import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  "../Styles/Organization.css"

function Organistion() {
    return (
        <Container fluid className="py-4">
            {/* Welcome Section */}
            <Row className="text-center mb-4">
                <Col>
                    <h1 style={{color:"orange"}} className="display-5">Welcome to Sundaragiri and Its Dairy Farm</h1>
                </Col>
            </Row>

            {/* Introduction Section */}
            <Row className="mb-4">
                <Col md={8} className="mx-auto text-center text-md-start">
                    <p>
                        V. Hanumantha Reddy (veterinarian) starts a dairy farm with one farmer (R. Balaiah). They have a
                        unique advantage due to their expertise in animal health.
                    </p>
                    <h4 className="fw-bold" style={{color:"gold"}}>Farmer (R. Balaiah)</h4>
                    <ul>
                        <li>Perform daily tasks like feeding, cleaning, and milking.</li>
                        <li>Report any issues with cows or equipment.</li>
                        <li>Assist with maintenance of the farm.</li>
                    </ul>
                </Col>
            </Row>

            {/* Farm Image */}
            <Row className="text-center mb-4">
                <Col>
                    <h2 style={{color:"blue"}} className="mb-3">Have a look at my beautiful farm!</h2>
                    <img
                        className="img-fluid rounded"
                        src="/cow images.jpg"
                        alt="Farm"
                        style={{ objectFit: 'cover', maxHeight: '500px' }}
                    />
                </Col>
            </Row>

            {/* Farmer's Vision */}
            <Row className="mb-4">
                <Col md={8} className="mx-auto text-center text-md-start">
                    <h2 className="fw-bold" style={{color:"gold"}}>Farmer's Vision</h2>
                    <p>
                        We are a group of family members working as full-time farmers around Sundaragiri with a common
                        vision to deliver good quality food to our present and future generations.
                    </p>
                </Col>
            </Row>
            <center>
            <h1 style={{color:"green"}}>Home Delivery</h1>
            <img
                style={{ width: "400px", height: "400px" }}
                src="https://sidsfarm.com/wp-content/uploads/2021/06/Home-Delivery.png"
                alt="Home Delivery"
            />
            </center>

            

            {/* Dairy Team Section */}
            <Row className="text-center mb-5">
                <Col>
                    <h1 style={{color:"blueviolet"}}>Dairy Team</h1>
                </Col>
            </Row>

            {/* Team Cards */}
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100">
                        <div className='imgdiv'>
                        <Card.Img
                        style={{height:"350px"}}
                            src="https://www.karimnagardairy.in/wp-content/uploads/2022/05/ADVISOR.jpg"
                            // className="img-fluid"
                        />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">V. Hanumantha Reddy / Owner</Card.Title>
                            <Card.Text>
                                He is a veterinarian and specialized in dairy science from Andhra Pradesh Agriculture
                                University, Hyderabad. He joined the APDDCF in 1975 and came to Karimnagar dairy in 1987.
                                He played a crucial role in the development of the Karimnagar dairy with his expertise.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100">
                    <div className='imgdiv'>
                        <Card.Img
                            src="/rb.jpg"
                            // className="img-fluid"
                            style={{heigh:"300px"}}
                        />
                        </div>
                        <Card.Body>
                            <Card.Title className="fw-bold">R. Balaiah / Farmer</Card.Title>
                            <Card.Text>
                                He is an expert in farming in Sundaragiri. His journey began in 2000 when he joined
                                Venkatamalu as a farmer and later transitioned to Hanumanth Reddy Dairy in 2004. With
                                expertise in agriculture, he has been managing 14 acres of land and taking care of 10 cows.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Organistion;
