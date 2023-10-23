import firebase from '../Config/firebase';

export async function getAll(buscar) {
  console.log(buscar);
  return await firebase.firestore().collection("productos").get();
}
