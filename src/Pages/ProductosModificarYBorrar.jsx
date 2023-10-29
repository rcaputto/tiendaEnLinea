import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { deleteProducto, getById, update } from "../Services/productosServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlertNavigation from "../Components/AlertNavigation";
import ButtonWithLoading from "../Components/ButtonWithLoading";

function ProductosModificarYBorrar() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  const { id } = useParams();
  const [alert, setAlert] = useState ()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const request = async () => {
      setLoading(true)
      try {
        const producto = await getById(id);
        setValue("nombre", producto.data().nombre);
        setValue("marca", producto.data().marca);
        setValue("descripcion", producto.data().descripcion);
        setValue("precio", producto.data().precio);
        setValue("categoria", producto.data().categoria);
        setValue("stock", producto.data().stock);
        setValue("imagenURL", producto.data().imagenURL);
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id]);

  const onSubmit = async (data) => {
    
    try {
      const document = await update(id, data);
      console.log(
        "🚀 ~ file: productosAlta.jsx:19 ~ onSubmit ~ document:",
        document)
        setAlert({
          duration: 3000,
          variant:'success', 
          text:'El producto ha sido modificado',
          link:'/'
      })
      
        
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    setLoading(true)
    try {
      const document = await deleteProducto(id);
      console.log(
        "🚀 ~ file: productosAlta.jsx:19 ~ onSubmit ~ document:",
        document
      )
      setLoading(false)
      setAlert({
        duration: 3000,
        variant:'success', 
        text:'El producto ha sido eliminado',
        link:'/'
    });;
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
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese marca"
            {...register("marca")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese descripción"
            {...register("descripcion")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingrese su precio"
            {...register("precio")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese categoria"
            {...register("categoria")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
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
            placeholder="Ingrese su imagen"
            {...register("imagenURL")}
          />
        </Form.Group>
        <ButtonWithLoading loading={loading} variant="primary" type="submit" style = {{marginTop:'6px', width:'100%'}}>Guardar</ButtonWithLoading>
        
        
        <Button onClick ={handleDelete} type='submit'>Eliminar</Button>
        <AlertNavigation {...alert} />
      </Form>
    </div>
  );
}

export default ProductosModificarYBorrar;
