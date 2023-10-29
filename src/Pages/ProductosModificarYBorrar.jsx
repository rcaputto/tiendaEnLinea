import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { deleteProducto, getById, update } from "../Services/productosServices";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductosModificarYBorrar() {
  const { register, handleSubmit, setValue } = useForm({ mode: "onChange" });
  const { id } = useParams();
  useEffect(() => {
    const request = async () => {
      try {
        const producto = await getById(id);
        setValue("nombre", producto.data().nombre);
        setValue("precio", producto.data().precio);
        setValue("imagenURL", producto.data().imagenURL);
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
        document
      );
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async () => {
    try {
      const document = await deleteProducto(id);
      console.log(
        "🚀 ~ file: productosAlta.jsx:19 ~ onSubmit ~ document:",
        document
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={handleDelete}>Eliminar</Button>
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
            placeholder="Ingrese su precio"
            {...register("precio")}
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

        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </div>
  );
}

export default ProductosModificarYBorrar;

//onclick=""
//onClick={}

//onchange=""
//onChange={}
