import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import logo from '../imagenes/logo.png'
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="menu">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/" className="link">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/detalle" className="link">Detalle</Link></Nav.Link>
                    <Nav.Link><Link className="link">Marvel</Link></Nav.Link>
                    <Nav.Link><Link className="link">DC</Link></Nav.Link>
                    <Nav.Link><Link className="link">Otros</Link></Nav.Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;