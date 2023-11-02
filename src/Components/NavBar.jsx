import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { AuthContext } from "../Context/AuthContex";
import { useContext } from "react";
import '../Styles/NavBar.css'

function NavBar({usuarioLogueado}) {
  const {login, handleLogout, adminLogin, handleAdminLogout} = useContext(AuthContext)
  return (
    <Navbar expand="lg" className="navBar">
      
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Nuevo</Link></Nav.Link>
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Barras</Link></Nav.Link>
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Discos</Link></Nav.Link>
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Dumbell</Link></Nav.Link>
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Ketlebell</Link></Nav.Link>
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Accesorios</Link></Nav.Link>
            <Nav.Link className='linkCopy'><Link to ='/' className='links'>Ropa</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default NavBar;