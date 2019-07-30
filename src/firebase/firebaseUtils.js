import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCfOqF_dEZoWElM7kYqiyy_NLON1HoeTTo",
  authDomain: "crown-clothing-91f8b.firebaseapp.com",
  databaseURL: "https://crown-clothing-91f8b.firebaseio.com",
  projectId: "crown-clothing-91f8b",
  storageBucket: "",
  messagingSenderId: "948999222101",
  appId: "1:948999222101:web:b62e8b09ed721e1a"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Agregar los nuevos usuarios a la base de datos
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.collection("users").doc(userAuth.uid);
  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("Error creating user", error.message)
    }
  }

  return userRef;
}


//Agregar nuevas colecciones a la base de datos
export const addCollectionAndDocuments = async (collectionName, collectionDocs) => {
  const collectionRef = firestore.collection(collectionName);
  const batch = firestore.batch();

  collectionDocs.forEach(el => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, el)
  })

  return await batch.commit()
}


//Tomar el shopData de la base de datos y crear un objeto nuevo por cada documento
export const convertSnapshot = (collections) => {
  const tranformedCollection = collections.docs.map(doc => {
    return {
      routeName: encodeURI(doc.data().title.toLowerCase()),
      id: doc.id,
      title: doc.data().title,
      items: doc.data().items
    }
  });
  return tranformedCollection;
}


//Autenticación con google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;