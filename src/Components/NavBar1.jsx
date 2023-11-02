import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { AuthContext } from "../Context/AuthContex";
import { useContext } from "react";
import '../Styles/NavBar1.css';
import logo from  '../Imagenes/crossLogo.png'

function NavBar1({usuarioLogueado}) {
  const {login, handleLogout, adminLogin, handleAdminLogout} = useContext(AuthContext)
  return (
    <Navbar expand="lg" className="navBar1" >
      
        <img src={logo} alt='logoImg' className='logo'/>
        <Form inline className='buscar'>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm- "
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto ">
            <Nav.Link><Link to ='/registro' className='registroLogin'>Registro</Link></Nav.Link>
            <Nav.Link><Link to ='/login' className='registroLogin'>Iniciar sesión</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar1;