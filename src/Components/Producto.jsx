import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Producto ({idProducto, nombreProducto, descripcionProducto, categoriaProducto, stock, imagenProducto}){
    return(
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{nombreProducto}</Card.Title>
          <Card.Text>
            {descripcionProducto}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
        </>
    )
}