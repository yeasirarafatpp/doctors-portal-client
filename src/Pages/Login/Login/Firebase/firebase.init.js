import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";

const firebaseInitApp = () => {
    initializeApp(firebaseConfig);
};

export default firebaseInitApp;