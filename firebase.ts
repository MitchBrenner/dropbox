import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1feWiB2N6xrxErlwjr3KOM5Wl39vJv2k",
    authDomain: "dropbox-clone-1afba.firebaseapp.com",
    projectId: "dropbox-clone-1afba",
    storageBucket: "dropbox-clone-1afba.appspot.com",
    messagingSenderId: "651243083046",
    appId: "1:651243083046:web:58320af36b22812f619de7"
  };

  // Initialize Firebase
  // check if next js server side already initialized, if not, initialize it
  // this is called singleton pattern, this means that the app is only initialized once
  const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);


  export { db, storage};