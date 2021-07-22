import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="menu">
            <Navbar.Brand>PichiCómics</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Categorías</Nav.Link>
                    <Nav.Link href="#ofertas">Ofertas Especiales</Nav.Link>
                    <Nav.Link href="#tienda">Tienda</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;