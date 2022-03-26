const db = require("/usr/local/app/connect_db.js");
const ref = db.ref("pdmblog");
const usersRef = ref.child('users');
const newUsersRef = usersRef.push();
newUsersRef.set({
  full_name: 'gracehop',
  active: true,
  nickname: 'cobol'
});
