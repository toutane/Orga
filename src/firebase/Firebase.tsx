import * as firebase from "firebase";

import { firebaseConfig } from "../config/firebaseConfig";

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  isInitialized() {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(resolve);
    });
  }
}
export default new Firebase();
