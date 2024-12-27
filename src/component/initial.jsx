import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import h from "./style.module.css";

function BasicExample() {
    return (
        <Navbar expand="lg" style={{color:"red"}} className={`${h.heading0}`}>
            <Container>
                {/* Brand Name */}
                <Navbar.Brand>
                    <Link
                        to="#home"
                        className="text-danger fw-bold text-decoration-none"
                    >
                        SUNDARAGIRI DAIRY
                    </Link>
                </Navbar.Brand>

                {/* Toggle Button for Small Screens */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Collapsible Navbar */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Link
                            to="/home"
                            className={`nav-link ${h.navLink} text-danger`}
                        >
                            HOME
                        </Link>
                        <Link
                            to="/organistion"
                            className={`nav-link ${h.navLink} text-danger`}
                        >
                            ORGANISATION
                        </Link>
                        <Link
                            to="/milk"
                            className={`nav-link ${h.navLink} text-danger`}
                        >
                            MILK
                        </Link>
                        <Link
                            to="/shop"
                            className={`nav-link ${h.navLink} text-danger`}
                        >
                            SHOP
                        </Link>
                        <Link
                            to="/login"
                            className={`nav-link ${h.navLink} text-danger`}
                        >
                            LOGIN
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;


