import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from '../Context/AuthContex';
import AlertNavigation from './AlertNavigation';


export default function Producto({ id, producto, nombre, descripcion, precio, categoria, stock, imagenURL, usuarioLogueado, button }) {

  const product = [nombre, precio, imagenURL];
  const [alert, setAlert ]= useState({variant:'', text:'', duration: 0, link:''})


  const { login, handleLogout, adminLogin, handleAdminLogout, cart, setCart } = useContext(AuthContext);

  const handleCarrito = () => {
    if(login){
    setCart([...cart, product])
    setAlert({
      duration: 3000,
      variant:'success', 
      text:'Producto agregado al carrito',
})
    }else{
      setAlert({
                duration: 3000,
                variant:'warning', 
                text:'Debe esta logueado',
                link:'/login'
    })
    }
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
            <Button variant="primary" onClick={handleCarrito}>
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
        <AlertNavigation
                      {...alert}
                  />
      </Card>
    </>
  )
}