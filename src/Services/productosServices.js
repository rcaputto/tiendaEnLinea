import firebase from '../Config/firebase';

export async function getAll(buscar) {
  console.log(buscar);
  return await firebase.firestore().collection("productos").get();
}

export async function create(payload) {
  //Ejemplo de POST -> Crear
  return await firebase.firestore().collection("productos").add(payload);
}
