import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyChmCsbwhf91N7wl55r3qcRXgQuMaAjtq4",
  authDomain: "salon-eventos-7bcfb.firebaseapp.com",
  projectId: "salon-eventos-7bcfb",
  storageBucket: "salon-eventos-7bcfb.appspot.com",
  messagingSenderId: "1069477834293",
  appId: "1:1069477834293:web:adf73802f9c700c1ae4b7c",
  measurementId: "G-BB6Y15JTX5"
};
// Initialize Firebase
const fb =firebase.initializeApp(firebaseConfig);


export  const db = fb.firestore();