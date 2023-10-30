import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from "../Context/AuthContex";
import { useContext } from "react";

export default function Producto ({id, nombre, descripcion, precio, categoria, stock, imagenURL, usuarioLogueado}){

  const {login, handleLogout, adminLogin, handleAdminLogout} = useContext(AuthContext)
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagenURL} alt='img' />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {precio}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/producto/detalle/${id}`}>Ver detalle</Button>
          {adminLogin && 
          
            <Button
                variant="primary"
                as={Link}
                to={`/producto/modificar-eliminar/${id}`}
              >
                Modificar
              </Button>
          }
        </Card.Body>
      </Card>
        </>
    )
}