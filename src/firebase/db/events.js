import firebase from "../firebase";

export async function getEventsByUid(uid){
  const eventRef = await firebase.db.collection("event").where("uid", "==", "uid").get();
  return eventRef.docs.map(doc => doc.data());
}

export async function getEvents(){
  const eventRef = await firebase.db.collection("event").get();
  return eventRef.docs.map(doc => doc.data());
}

export function createEvent(uid,info){
  return firebase.db.collection("event").doc().set(info);
}
