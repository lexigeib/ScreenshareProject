// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

/* 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
Hint: Setup Firebase
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
*/
export const firebaseConfig = {
  apiKey: "AIzaSyAvVOgSHJG1Lee4RxSOUA4g6bpjnVVuXgQ",
  authDomain: "screenshare-23133.firebaseapp.com",
  databaseURL: "https://screenshare-23133-default-rtdb.firebaseio.com",
  projectId: "screenshare-23133",
  storageBucket: "screenshare-23133.appspot.com",
  messagingSenderId: "79442419192",
  appId: "1:79442419192:web:7c671abe3a5daa2a044a0d",
  measurementId: "G-R2RMJHEHLD"
};

const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export const environment = {
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
