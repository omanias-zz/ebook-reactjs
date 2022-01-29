import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF9sszhYpk59jKgpfri5dXrkJz0lF4NiI",
  authDomain: "e-book-28f41.firebaseapp.com",
  projectId: "e-book-28f41",
  storageBucket: "e-book-28f41.appspot.com",
  messagingSenderId: "1061493684152",
  appId: "1:1061493684152:web:bcdc84d15be16c325e414d",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
