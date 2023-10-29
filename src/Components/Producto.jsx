import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Producto ({id, nombre, descripcion, precio, categoria, stock, imagenURL}){
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
          <Button
              variant="primary"
              as={Link}
              to={`/producto/eliminar/${id}`}
            >
              Modificar
            </Button>
        </Card.Body>
      </Card>
        </>
    )
}