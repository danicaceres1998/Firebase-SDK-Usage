var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("/usr/local/app/z5wc3-e32831e2e1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://electiva-1-pdm-default-rtdb.firebaseio.com"
});

// Exporting the db
module.exports = admin.database();
