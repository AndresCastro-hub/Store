import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCqTTU_f3keWF-iOLZQqadrll08ZO2vACg",
    authDomain: "store-170bf.firebaseapp.com",
    projectId: "store-170bf",
    storageBucket: "store-170bf.appspot.com",
    messagingSenderId: "227260552805",
    appId: "1:227260552805:web:d11edd2abcc721b979d88c"
  };

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
}