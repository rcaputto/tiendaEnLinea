import firebase from "../Config/firebase";

export async function registroUser(data) {
  const responseUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password);
  if (responseUser.user.uid) {
    const document = await firebase.firestore().collection("usuarios").add({
      name: data.nombre,
      lastname: data.apellido,
      email: data.email,
      userId: responseUser.user.uid,
    });
    return document;
  }
}
export async function login(data) {
  const responseUser = await firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password);
  if (responseUser.user.uid) {
    const document = await firebase
      .firestore()
      .collection("usuarios")
      .where("userId", "==", responseUser.user.uid)
      .get();
    return document.docs[0].data();
  }

  return {};
}
