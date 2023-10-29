import firebase from '../Config/firebase';


export async function getAll(buscar) {
  console.log(buscar);
  return await firebase.firestore().collection("productos").get();
}

export async function getById(id) {
  //Ejemplo de GET
  return await firebase.firestore().doc(`productos/${id}`).get();
}

export async function create(payload) {
  //Ejemplo de POST -> Crear
  return await firebase.firestore().collection("productos").add(payload);
}

export async function deleteProducto(id) {
  //Ejemplo de DELETE -> Eliminar
  return await firebase.firestore().doc(`productos/${id}`).delete();
}

export async function update(id, data) {
  //Ejemplo de PUT -> Actualizar
  return await firebase.firestore().doc(`productos/${id}`).set(data);
}


