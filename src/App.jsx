import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import { useState } from 'react';
import AuthProvider, { AuthContext } from './Context/AuthContex';
import NavBar from './Components/NavBar';
import AltaDeProducto from './Pages/AltaDeProducto';
import Detalle from './Pages/Detalle';
import Carrito from './Pages/Carrito';
import ProductosModificarYBorrar from './Pages/ProductosModificarYBorrar';


function App() {
  const [userLogued, setUserLogued] = useState('')

  const usuarioLogueado = userLogued.name
  console.log('USUARIOLOGUEADO', usuarioLogueado)


  return (
    <Router>
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({ login, adminLogin }) => (
              <>
                <NavBar usuarioLogueado={usuarioLogueado} />
                <Routes>
                  <Route path='/' element={<Home login = {login} />} />
                  <Route path='/registro' element={<Registro />} />
                  <Route path='/login' element={<Login setUserLogued={setUserLogued} />} />
                  <Route path='/producto/detalle/:id' element={<Detalle login = {login} />} />
                  <Route path='/detalle-compra' element={<Carrito />} />

                  {adminLogin &&
                    <>
                      <Route path='/producto/alta-producto' element={<AltaDeProducto />} />
                      <Route path='/producto/modificar-eliminar/:id' element={<ProductosModificarYBorrar />} />
                    </>
                  }
                </Routes>
              </>
            )
          }
        </AuthContext.Consumer>


      </AuthProvider>
    </Router>
  )
}

export default App
