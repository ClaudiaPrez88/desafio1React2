import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaHome } from "react-icons/fa";
import { FaPenAlt } from "react-icons/fa";

function Navegacion() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Link to="/"><FaHome />Inicio</Link>
            <Link to="/contacto"><FaPenAlt />Contacto</Link>
            
          </Nav>
        </Navbar.Collapse>
          <Link to="/" className='link-home'>
            <Navbar.Brand href="#home">Happy Cake<FaBirthdayCake className='icono'/></Navbar.Brand>
          </Link>
      </Container>
    </Navbar>
  );
}

export default Navegacion;