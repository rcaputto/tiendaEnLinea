import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getById } from '../Services/productosServices';
import Loading from '../Components/Loading';
import AlertNavigation from '../Components/AlertNavigation';
import '../Styles/Detalle.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContex';


function Detalle({login}) {
  const { id } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert ]= useState({variant:'', text:'', duration: 0, link:''})
  const productoCarrito = [producto.nombre, producto.precio, producto.imagenURL]
  const { cart, setCart } = useContext(AuthContext)

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

  const handleCarrito = () => {
    if(login){
    setCart([...cart, productoCarrito]);
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
    <Loading loading={loading}>
      <h1>Detalle de producto</h1>
      <div className="detalleCard">
        <img src={producto.imagenURL} alt='img' />
        <div className='detalle'>
          <h1>{producto.nombre}</h1>
          <p>Marca: {producto.marca}</p>
          <p>Descripción: {producto.descripcion}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Categoría: {producto.categoria}</p>
          <p>Stock: {producto.stock}</p>
          <Button type='submit' onClick={handleCarrito}>Agregar al carrito</Button>
          <AlertNavigation
                    {...alert}
                />
        </div>
      </div>
    </Loading>
  );
}

export default Detalle;
