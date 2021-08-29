import './NavBar.css';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

    const index = { link: "/", text: "Inicio" }

    const navBarCategories = [{ link: "/categories/Marvel", text: "Marvel" },
    { link: "/categories/DC", text: "DC" },
    { link: "/categories/Otros", text: "Otros" }]

    const offer = { link: "/offers", text: "Ofertas del mes" }

    return (
        <Navbar collapseOnSelect expand="lg" className="menu">
            <Link to={index.link}><img src={logo} alt="logo"></img></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={index.link} className="link">{index.text}</Link>
                    <NavDropdown title="Categorías" id="basic-nav-dropdown">
                        {navBarCategories.map(cat => {
                            return (<Link to={cat.link} className="linkDrop">{cat.text}</Link>)
                        })}
                    </NavDropdown>
                    <Link to={offer.link} className="link">{offer.text}</Link>
                </Nav>
                <CartWidget />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;