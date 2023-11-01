import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import AuthProvider, { AuthContext } from '../Context/AuthContex';


export default function Producto({ id, producto, nombre, descripcion, precio, categoria, stock, imagenURL, usuarioLogueado, button }) {

  const product = [nombre, precio, imagenURL];


  const { login, handleLogout, adminLogin, handleAdminLogout, cart, setCart } = useContext(AuthContext);

  const handleCarrito = (product) => {
    setCart([...cart, product])
  }
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imagenURL} alt='img' />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {precio}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/producto/detalle/${id}`}>Ver detalle</Button>
          {button && (
            <Button as={Link} to='detalle-compra' variant="primary" onClick={() => handleCarrito(product)}>
              {button}
            </Button>
          )}
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