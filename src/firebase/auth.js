import firebase from "./firebase";

export function createUser(email,password){
  return firebase.auth.createUserWithEmailAndPassword(email, password);
}

export function login(email,password){
  return firebase.auth.signInWithEmailAndPassword(email, password);
}
