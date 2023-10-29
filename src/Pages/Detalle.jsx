import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../Services/productosServices';
import Loading from '../Components/Loading';

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
      <div className="">
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        {/* <p>{producto.description}</p> */}
      </div>
    </Loading>
  );
}

export default Detalle;
