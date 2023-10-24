import { useEffect, useState } from "react";
import { getAll } from "../../Services/productosServices";

export default function useFetchProducts () {
    
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buscar, setBuscar] = useState()

    useEffect( () => {
        const request = async () => {
            try {
                const data = await getAll(buscar)
                console.log ('Data Fetch', data)
                setProductos (data.docs)
                setLoading (false)
            }
            catch (error){
                console.log ('Se produjo un error', error)
            }
        }
        request ()
    }, [buscar]);

    const handleBuscar = (e) => {
        setBuscar (e?.target?.value)
    }
    return{
        productos,
        loading,
        buscar, handleBuscar
    }
}