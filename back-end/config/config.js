/* 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
Setup your Firebase Config
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
*/
const {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
} = process.env;
module.exports = {
    firebaseConfig: {
        apiKey: "AIzaSyAvVOgSHJG1Lee4RxSOUA4g6bpjnVVuXgQ",
        authDomain: "screenshare-23133.firebaseapp.com",
        databaseURL: "https://screenshare-23133-default-rtdb.firebaseio.com",
        projectId: "screenshare-23133",
        storageBucket: "screenshare-23133.appspot.com",
        messagingSenderId: "79442419192",
        appId: "1:79442419192:web:7c671abe3a5daa2a044a0d",
        measurementId: "G-R2RMJHEHLD"
    }
}
// const firebaseConfig = {};

// module.exports = firebaseConfig;
