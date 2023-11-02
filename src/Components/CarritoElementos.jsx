import { AuthContext } from '../Context/AuthContex';
import { useContext } from 'react';
import Figure from 'react-bootstrap/Figure';

const CarritoElementos = () => {
    const { cart, login, setCart } = useContext(AuthContext)
    console.log('CARRITO', cart)
    
        return (
            <>
                {cart.map((producto) => (
                    <>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={producto[2]}
                            />
                            <Figure.Caption>
                                {producto[0]}
                            </Figure.Caption>
                            <Figure.Caption>
                                {producto[1]}
                            </Figure.Caption>
                        </Figure>
    
                    </>
                ))}
            </>
        )
    
    
}

export default CarritoElementos