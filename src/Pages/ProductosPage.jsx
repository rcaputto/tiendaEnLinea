import useFetchProducts from "../Utils/Hooks/useFetchProductos";
import Loading from '../Components/Loading'
import { Row, Col, Button } from "react-bootstrap";
import Producto from '../Components/Producto';




export default function ProductosPage({login}) {
    const { productos, loading, buscar, handlebuscar } = useFetchProducts();
    

    const titulo = 'Listado de productos'


    return (
        <Loading loading={loading}>
            <input value={buscar} onChange={handlebuscar} />
            <h1>{titulo}</h1>
            <Row xs={1} sm={2} md={3} lg={8}>
                {productos.map((producto) => (
                    <Producto key={producto.id} login = {login} producto={producto} {...producto.data()} id={producto.id} button={<Button type='submit' >Agregar al carrito</Button>} />
                ))}
            </Row>
        </Loading>

    )
}