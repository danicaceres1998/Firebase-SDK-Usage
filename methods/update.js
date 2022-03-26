const db = require("/usr/local/app/connect_db.js");
const ref = db.ref("pdmblog");
const usersRef = ref.child('users');
// Actualizando los datos de un usuario
const juanRef = usersRef.child('juan');
juanRef.update({
  'active': true
});
console.log("Updated!");

// Agregando atributos a un objeto
usersRef.update({
    'roger/nickname': 'rarmoa',
    'juan/nickname': 'jojeda'
});
console.log("Updated!");
