const db = require("/usr/local/app/connect_db.js");
const ref = db.ref("pdmblog");
const usersRef = ref.child('users');
usersRef.set({
  roger: {
    active: true,
    full_name: "Roger Armoa"
  },
  juan: {
    active: false,
    full_name: "Juan Ojeda"
  }
});
console.log("Saved!");