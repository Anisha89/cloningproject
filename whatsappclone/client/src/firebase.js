import {initializeApp} from "firebase/app";
import { getAuth,GoogleAuthProvider }
from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjHEmiZCdFD7wpje8HJDxDZChxX_ENByQ",
  authDomain: "whatsappclone-59b13.firebaseapp.com",
  projectId: "whatsappclone-59b13",
  storageBucket: "whatsappclone-59b13.appspot.com",
  messagingSenderId: "576511719701",
  appId: "1:576511719701:web:07dd9c432a73c51b61911c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export {
  app,auth,provider
};
