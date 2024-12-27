import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap'; // Ensure react-bootstrap is installed
import '../Styles/shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const products = [
        { id: 1, name: 'Cow Milk', price: 35,  image: 'https://sidsfarm.com/wp-content/uploads/2021/08/Cow-Milk-1.png' },
        { id: 2, name: 'Buffalo Milk', price: 50, image: 'https://sidsfarm.com/wp-content/uploads/2023/08/Website-Image-03-1.png' },
        { id: 3, name: 'Cow Curd', price: 40, image: 'https://www.bigbasket.com/media/uploads/p/xl/40288759_1-sids-farm-cow-curd-100-pure-no-hormones-rich-in-calcium-protein.jpg' },
        { id: 4, name: 'Buffalo Curd', price: 50, image: 'https://indifoodbev.com/wp-content/uploads/2021/07/01-Front.png' }
    ];

    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id);
        if (!exists) {
            setCart((prevCart) => [...prevCart, product]);
        } else {
            alert(`${product.name} is already in the cart.`);
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    const handlePayment = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Add items to proceed.");
            return;
        }

        // Simulate payment process
        alert("Payment successful! Thank you for your purchase.");
        setPaymentSuccess(true);
        setCart([]); // Clear the cart after successful payment
    };

    return (
        <div className="App">
            <h1 style={{color:"gold"}}>Products</h1>
            <div className="products">
                {products.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <h2 style={{color:"blue"}}>Cart</h2>
            <div className="cart">
                {cart.length > 0 ? (
                    <>
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                {item.name} - ${item.price}
                            </div>
                        ))}
                        <div className="cart-total">
                            <strong>Total: ${calculateTotal()}</strong>
                        </div>
                        <button className="pay-now-btn" onClick={handlePayment}>
                            Pay Now
                        </button>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>

            {paymentSuccess && (
                <div className="payment-success">
                    <h3 style={{color:"blueviolet"}}>Payment Successful!</h3>
                    <p >Thank you for shopping with us.</p>
                </div>
            )}

            <h1 style={{color:"green"}}>Home Delivery</h1>
            <img
                style={{ width: "400px", height: "400px" }}
                src="https://sidsfarm.com/wp-content/uploads/2021/06/Home-Delivery.png"
                alt="Home Delivery"
            />
            <p>We work with 3+ delivery partners to ensure timely milk delivery.</p>

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
        </div>
    );
};

export default Shop;


