import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { create, upLoadFile } from "../Services/productosServices";
import { useState } from "react";

function AltaDeProducto() {
  const { register, handleSubmit } = useForm({ mode: "onChange" });
  
 

  const onSubmit = async (data) => {
    try {
      const document = await create(data);
      console.log (document)
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
            {...register("nombreProducto")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese descripcion"
            {...register("descripcionProducto")}
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