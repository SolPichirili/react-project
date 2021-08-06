import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';
import logo from '../imagenes/logo.png'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const NavBar = () => {

    const { compra } = useCartContext();

    return (
        <Navbar collapseOnSelect expand="lg" className="menu">
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/" className="link">Inicio</Link></Nav.Link>
                    <Nav.Link><Link to="/categorias/Marvel" className="link">Marvel</Link></Nav.Link>
                    <Nav.Link><Link to="/categorias/DC" className="link">DC</Link></Nav.Link>
                    <Nav.Link><Link to="/categorias/Otros" className="link">Otros</Link></Nav.Link>
                </Nav>
                {compra.length !== 0 && <CartWidget />}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;