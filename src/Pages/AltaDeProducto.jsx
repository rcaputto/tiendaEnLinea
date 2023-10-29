import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { create } from "../Services/productosServices";
import {storage} from '../Config/firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid'

function AltaDeProducto() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  


  const onSubmit = async (data) => {
    try {
      const imagen = data.imagen [0];
      const storageRef = ref (storage, v4())
      await uploadBytes(storageRef, imagen)
      const url = await getDownloadURL(storageRef)

      const producto = {
        nombre: data.nombre,
        descripcion: data.precio,
        imagenURL: url,
      };
      const document = await create(producto);
      console.log (document)

      setValue('nombre', '');
      setValue('precio', '');
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
          <Form.Label>Imagen</Form.Label>
          <Form.Control
            type="file"
            placeholder="Seleccione una imagen"
            {...register("imagen")}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>

     
      
      
      
      
      
   
      
    </div>
  );
}

export default AltaDeProducto;