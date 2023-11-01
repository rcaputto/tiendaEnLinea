import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { AuthContext } from "../Context/AuthContex";
import { useContext } from "react";

function NavBar({usuarioLogueado}) {
  const {login, handleLogout, adminLogin, handleAdminLogout} = useContext(AuthContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="#home">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to ='/'>Home</Link></Nav.Link>
            <Nav.Link><Link to ='/detalle-compra'>Carrito</Link></Nav.Link>
            
            {!login && 
            <>
            <NavDropdown title="Usuarios" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to ='/registro'>Registro</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to ='/login'>Login</Link></NavDropdown.Item>
          </NavDropdown>
            </>
            }
            {login &&
            <>
            <NavDropdown title = {usuarioLogueado} id="basic-nav-dropdown" style={{color:'white'}}>
            <NavDropdown.Item > Perfil  </NavDropdown.Item>
            <NavDropdown.Item > Configuración  </NavDropdown.Item>
            <NavDropdown.Item ><Nav.Link onClick={handleLogout} style={{color:'black'}}> Salir </Nav.Link></NavDropdown.Item>
            </NavDropdown>
            
            </>}

            {adminLogin &&
              <>
              <NavDropdown title = {usuarioLogueado} id="basic-nav-dropdown" style={{color:'white'}}>
              <NavDropdown.Item ><Link to='producto/alta-producto'>Carga de productos</Link> </NavDropdown.Item>
              
              <NavDropdown.Item ><Nav.Link onClick={handleAdminLogout} style={{color:'black'}}> Salir </Nav.Link></NavDropdown.Item>
              </NavDropdown>
              </>}
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;