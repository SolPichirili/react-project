import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
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
                    <Link to="/categories/Marvel" className="link">Marvel</Link>
                    <Link to="/categories/DC" className="link">DC</Link>
                    <Link to="/categories/Otros" className="link">Otros</Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;