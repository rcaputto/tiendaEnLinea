import React, { useState } from 'react';

export default function Carrito (props)  {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
 
  // Función para agregar un producto al carrito
  const agregarAlCarrito = () => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.precio);
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (producto) => {
    const nuevoCarrito = carrito.filter(item => item !== producto);
    setCarrito(nuevoCarrito);
    setTotal(total - producto.precio);
  };

  // Función para confirmar la compra
  const confirmarCompra = () => {
    // Aquí puedes implementar la lógica para procesar la compra, como enviar un pedido al servidor, actualizar inventario, etc.
    alert(`Compra confirmada. Total: $${total}`);
    setCarrito([]);
    setTotal(0);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => eliminarDelCarrito(producto)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
      <button onClick={confirmarCompra}>Confirmar Compra</button>
    </div>
  );
};


