import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const FirebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseAuthentication;
