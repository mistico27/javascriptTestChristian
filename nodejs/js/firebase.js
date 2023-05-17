import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {collection,getFirestore,addDoc,getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyA_A5qE71deW8fAiApk4QbQbaOvTIBQINg",
  authDomain: "myfirebase-25g.firebaseapp.com",
  databaseURL: "https://myfirebase-25g-default-rtdb.firebaseio.com",
  projectId: "myfirebase-25g",
  storageBucket: "myfirebase-25g.appspot.com",
  messagingSenderId: "206282535632",
  appId: "1:206282535632:web:2fd837c85b61ae9fc2e4d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export const saveTask =(nombre,apellidoPat,apellidoMat,cel,email,desc)=>{
 addDoc(collection(db,'tasks'),{nombre,apellidoPat,apellidoMat,cel,email,desc});
  
}

export const getTasks = () => getDocs(collection(db,'tasks'))