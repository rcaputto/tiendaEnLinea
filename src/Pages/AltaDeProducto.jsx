import { useForm } from "react-hook-form";
import {  Form } from "react-bootstrap";
import { create } from "../Services/productosServices";
import {storage} from '../Config/firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'
import { useState } from "react";
import AlertNavigation from "../Components/AlertNavigation";
import ButtonWithLoading from "../Components/ButtonWithLoading";

function AltaDeProducto() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false)


  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const imagen = data.imagen [0];
      const storageRef = ref (storage, v4())
      await uploadBytes(storageRef, imagen)
      const url = await getDownloadURL(storageRef)

      const producto = {
        nombre: data.nombre,
        marca: data.marca,
        precio: data.precio,
        descripcion: data.descripcion,
        categoria: data.categoria,
        stock: data.stock,
        imagenURL: url,
      };
      const document = await create(producto);
      console.log (document)

      setValue('nombre', '');
      setValue('marca', '');
      setValue('precio', '');
      setValue('descripcion', '');
      setValue('categoria', '');
      setValue('stock', '');
      setLoading(false)

      setAlert({
        duration: 3000,
        variant:'success', 
        text:'El producto ha sido creado. Aguarde y será redirigido a la página principal',
        link:'/'
    });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            {...register("nombre")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese marca"
            {...register("marca")}
          />
        </Form.Group>
      
         
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese precio"
            {...register("precio")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese categoria del producto"
            {...register("categoria")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese stock"
            {...register("stock")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese una descripción del producto"
            {...register("descripcion")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            placeholder="Seleccione una imagen"
            {...register("imagen")}
          />
        </Form.Group>
        <ButtonWithLoading loading={loading} variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Guardar</ButtonWithLoading>
        <AlertNavigation {...alert}/>
      </Form>

     
      
      
      
      
      
   
      
    </div>
  );
}

export default AltaDeProducto;