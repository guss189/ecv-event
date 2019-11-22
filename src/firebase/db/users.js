import firebase from "../firebase";

export function addUserInfo(uid,info){
  return firebase.db.collection("users").doc(uid).set(info);
}

export async function getUserInfo(uid){
  const userRef = await firebase.db.collection("users").doc(uid).get();
  return userRef.data();
}
