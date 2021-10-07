import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtr56KFTBpGCb1R10_TADKC2JCXA0i7SM",
  authDomain: "hunt-app-eb231.firebaseapp.com",
  projectId: "hunt-app-eb231",
  storageBucket: "hunt-app-eb231.appspot.com",
  messagingSenderId: "798749945988",
  appId: "1:798749945988:web:b58cb7943250696c8ed2d1",
  measurementId: "G-88B6EQP5XZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
}

export { firebase };
