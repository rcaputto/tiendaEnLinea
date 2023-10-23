import useFetchProducts from "../Utils/Hooks/useFetchProductos";
import Loading from '../Components/Loading'
import { Row, Col } from "react-bootstrap";
import Producto from '../Components/Producto'


export default function ProductosPage(){
    const { productos, loading, buscar, handlebuscar} = useFetchProducts ();

    const titulo = 'Listado de productos'

    return(
        <Loading loading={loading}>
                <input value={buscar} onChange={handlebuscar}/>
            <h1>{titulo}</h1>
                <Row xs={1} sm={2} md={3} lg={8}>
                        {productos.map((producto) => (
                        <Producto key = {producto.id} {...producto.data()} id = {producto.id}/>
                    ))}
                    
                </Row>
        </Loading>
        
    )
}