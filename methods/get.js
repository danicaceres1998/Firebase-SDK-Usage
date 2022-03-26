const db = require("/usr/local/app/connect_db.js");
const ref = db.ref("pdmblog");

// Get all Values
ref.on('value', (snapshot) => {
    console.log(snapshot.val());
}, (errorObject) => {
    console.log('The read failed: ' + errorObject.name);
});  


// Get all values with previousChildKey
db.ref("pdmblog/users").on('child_added', (snapshot, prevChildKey) => {
    const newUser = snapshot.val();
    console.log('Active: ' + newUser.active);
    console.log('Nickname: ' + newUser.nickname);
    console.log('Previous User ID: ' + prevChildKey);
    console.log('------------------------')
});


// Get all ordered by the child
db.ref("pdmblog/users").orderByChild('nickname').on('child_added', (snapshot) => {
    console.log(snapshot.key + ' was ' + snapshot.val().nickname + ' nickname');
});
  

// Get values ordered by key
db.ref("pdmblog/users").orderByKey().on('child_added', (snapshot) => {
    console.log(snapshot.key)
});
