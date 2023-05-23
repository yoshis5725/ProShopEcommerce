import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";

function Header() {
    return (
        <Fragment>
            <Navbar bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand as={Link} to='/products'>ProShop</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">

                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
                            <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                        </Nav>

                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </Fragment>
    );
}

export default Header;