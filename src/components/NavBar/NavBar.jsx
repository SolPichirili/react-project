import './NavBar.css';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" className="menu">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="link">Inicio</Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        <Link to="/categories/Marvel" className="linkDrop">Marvel</Link>
                        <Link to="/categories/DC" className="linkDrop">DC</Link>
                        <Link to="/categories/Otros" className="linkDrop">Otros</Link>
                    </NavDropdown>
                    <Link to="/offers" className="link">Ofertas del Mes</Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;