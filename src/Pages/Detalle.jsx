import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../Services/productosServices';
import Loading from '../Components/Loading';
import '../Styles/Detalle.css'

//Component tipo funcion
function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  console.log('🚀 ~ file: Detalle.jsx:6 ~ Detalle ~ params:', id);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getById(id);

        setProducto(response.data());
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);

  return (
    <Loading loading={loading}>
    <h1>Detalle de producto</h1>
      <div className="detalleCard">
      <img src = {producto.imagenURL} alt='img' />
      <div className='detalle'>
        <h1>{producto.nombre}</h1>
        <p>Marca: {producto.marca}</p>
        <p>Descripción: {producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Categoría: {producto.categoria}</p>
          <p>Stock: {producto.stock}</p>
        </div>
      </div>
    </Loading>
  );
}

export default Detalle;
