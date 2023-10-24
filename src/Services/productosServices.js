import firebase from '../Config/firebase';
import {storage} from '../Config/firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import {v4} from 'uuid'

export async function getAll(buscar) {
  console.log(buscar);
  return await firebase.firestore().collection("productos").get();
}

export async function create(payload) {
  //Ejemplo de POST -> Crear
  return await firebase.firestore().collection("productos").add(payload);
}

export async function upLoadFile (file){
  const storageRef = ref (storage, v4())
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url
}
