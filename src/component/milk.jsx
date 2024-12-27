import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Milk() {
    return (
        <Container fluid className="py-4">
            {/* Header Section */}
            <Row className="text-center">
                <Col>
                    <h1 style={{color:"blue"}}>
                        Natural Taste From Sundharagiri and Its Dairy Farm!
                    </h1>
                </Col>
            </Row>

            {/* Cow Milk Section */}
            <Row className="my-4">
                <Col xs={12} className="text-center">
                    <h1 style={{color:"gold"}}>Cow Milk</h1>
                </Col>
                <Col md={8} className="mx-auto">
                    <p>
                        At Sundharagiri and Its Dairy Farm, we give the best care to our cows and feed them with home-grown
                        fodder for the best quality milk possible. Cow milk is a good source of protein and calcium, as well
                        as nutrients including vitamin B12 and iodine. It contains magnesium, which is important for bone
                        development and muscle function.
                    </p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-center">
                <div className='img'>
                    <img
                        className="img-fluid rounded"
                        src="https://sidsfarm.com/wp-content/uploads/2021/08/Cow-Milk-1.png"
                        alt="Cow Milk"
                        style={{ maxHeight: '300px' }}
                    />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Table bordered className="mx-auto w-75">
                        <thead>
                            <tr>
                                <th>Total Energy</th>
                                <th>63 kcal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carbohydrate</td>
                                <td>4.7 g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>3.2 g</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td>3.5 g*</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            {/* Buffalo Milk Section */}
            <Row className="my-4">
                <Col xs={12} className="text-center">
                    <h1 style={{color:"gold"}}>Buffalo Milk</h1>
                </Col>
                <Col md={8} className="mx-auto">
                    <p>
                        At Sundharagiri and Its Dairy Farm, buffalo milk has more protein, fat, nutrients, and lactose.
                        Consuming milk with higher protein content increases your feeling of fullness. This may help reduce
                        food intake throughout the day and assist in controlling weight and body fat.
                    </p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-center">
                <div className='img'>
                    <img
                        className="img-fluid rounded"
                        src="https://sidsfarm.com/wp-content/uploads/2023/08/Website-Image-03-1.png"
                        alt="Buffalo Milk"
                        style={{ maxHeight: '300px' }}
                    />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Table bordered className="mx-auto w-75">
                        <thead>
                            <tr>
                                <th>Total Energy</th>
                                <th>88 kcal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carbohydrate</td>
                                <td>4.8 g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>3.7 g</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td>6.0 g*</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row className="my-4">
                <Col xs={12} className="text-center">
                    <h1 style={{color:"gold"}}>Cow Curd</h1>
                </Col>
                <Col md={8} className="mx-auto">
                    <p>
                        At Sundharagiri and Its Dairy Farm, buffalo milk has more protein, fat, nutrients, and lactose.
                        Consuming milk with higher protein content increases your feeling of fullness. This may help reduce
                        food intake throughout the day and assist in controlling weight and body fat.
                    </p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-center">
                <div className='img'>
                    <img
                        className="img-fluid rounded"
                        src="https://www.bigbasket.com/media/uploads/p/xl/40288759_1-sids-farm-cow-curd-100-pure-no-hormones-rich-in-calcium-protein.jpg"
                        alt="Buffalo Milk"
                        style={{ maxHeight: '300px' }}
                    />
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Table bordered className="mx-auto w-75">
                        <thead>
                            <tr>
                                <th>Total Energy</th>
                                <th>71 kcal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Carbohydrate</td>
                                <td>5.2 g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>3.5 g</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td>4.0 g*</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>

            <Row className="my-4">
                <Col xs={12} className="text-center">
                    <h1 style={{color:"gold"}}>Buffalo Curd</h1>
                </Col>
                <Col md={8} className="mx-auto">
                    <p>
                        At Sundharagiri and Its Dairy Farm, buffalo milk has more protein, fat, nutrients, and lactose.
                        Consuming milk with higher protein content increases your feeling of fullness. This may help reduce
                        food intake throughout the day and assist in controlling weight and body fat.
                    </p>
                </Col>
            </Row>

            <Row className="align-items-center">
                <Col xs={12} md={6} className="text-center">
                <div className='img'>
                    <div className='img'>
                    <img
                        className="img-fluid rounded"
                        src="https://indifoodbev.com/wp-content/uploads/2021/07/01-Front.png"
                        alt="Buffalo Milk"
                        style={{ maxHeight: '300px' }}
                    />
                    </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Table bordered className="mx-auto w-75">
                        <thead>
                            <tr>
                                <th>Total Energy</th>
                                <th>82 kcal</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>Carbohydrate</td>
                                <td>5.4 g</td>
                            </tr>
                            <tr>
                                <td>Protein</td>
                                <td>3.8 g</td>
                            </tr>
                            <tr>
                                <td>Fat</td>
                                <td>5.0 g*</td>
                            </tr>
                        </tbody>
                    </Table>
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
            <Row className="text-center my-5">
                <Col>
                    <h1 style={{color:"blueviolet"}}>Dairy Team</h1>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <div className='img'>
                        <Card.Img
                            variant="top"
                            src="https://www.karimnagardairy.in/wp-content/uploads/2022/05/ADVISOR.jpg"
                        />
                        </div>
                        <Card.Body>
                            <Card.Title>V. Hanumantha Reddy / Owner</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <div className='img'>
                        <Card.Img
                            variant="top"
                            src="/rb.jpg"
                            style={{height:"455px" }}
                        />
                        </div>
                        <Card.Body>
                            <Card.Title>R. Balaiah / Farmer</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Milk;
