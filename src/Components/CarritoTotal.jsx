import { AuthContext } from '../Context/AuthContex';
import { useContext } from 'react';

const CarritoTotal = () => {

    const { cart } = useContext(AuthContext)


    const total = cart.reduce((acc, el) => {
        const value = el[1];
        if (typeof value === 'string') {
            const numericValue = parseFloat(value.replace('.', ''));

            if (!isNaN(numericValue)) {
                return acc + numericValue;
            }
        }
        return acc; 
    }, 0);
    
    const formattedTotal = total.toLocaleString(undefined, { minimumFractionDigits: 2 });
    return (
        <>
            <h3>Total a pagar: $ {formattedTotal}</h3>
        </>
    )
}

export default CarritoTotal