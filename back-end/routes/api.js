const express = require('express');
const router = express.Router();

/* 
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
Setup your back-end routing
🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 🎙 
*/
let database = firebase.database()

database.ref("customPath").set(obj, function(error) {
    if (error) {
      // The write failed...
      console.log("Failed with error: " + error)
    } else {
      // The write was successful...
      console.log("success")
    }
})

router.get('/', (req, res) => {
  return 'hello'
});

router.post('/', (req, res) => {});

module.exports = router;
