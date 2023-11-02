import CarritoTotal from  '../Components/CarritoTotal';
import CarritoElementos from  '../Components/CarritoElementos';
import { AuthContext } from '../Context/AuthContex';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const Carrito = () => {
    const {  login, setCart } = useContext(AuthContext);

    const handleVaciarCarrito = () =>{
        setCart([])
        
    }

    if (!login){
        return (
            <h1>Carrito Vacio</h1>
        )
    }else{

        return (
            <>
                <CarritoElementos/>
                <CarritoTotal/>
                <Button type = 'submit' onClick={handleVaciarCarrito} >Vaciar carrito</Button>
            </>
        )
    }
}

export default Carrito