import './App.css';
import {BrowserRouter as Router  , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import { useState } from 'react';
import AuthProvider from './Context/AuthContex';
import NavBar from './Components/NavBar';
import AltaDeProducto from './Pages/AltaDeProducto';

function App() {
  const [userLogued, setUserLogued]= useState('')
  const usuarioLogueado = userLogued.name
  console.log ('USUARIOLOGUEADO', usuarioLogueado)

  return (
    <Router>
    <AuthProvider>
    <NavBar usuarioLogueado = {usuarioLogueado} />
      <Routes>
        <Route path ='/' element = { <Home/> }/>
        <Route path ='/registro' element = {<Registro/> }/>
        <Route path ='/login' element = {<Login setUserLogued = {setUserLogued}/> }/>
        <Route path ='/alta-producto' element = {<AltaDeProducto/> }/>
      </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
