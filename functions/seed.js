const admin = require("firebase-admin");
var serviceAccount = require("AIzaSyAfJZJUTryZ2BNyMah4ee3W9ZIx0D4_2oM");

const faker = require("faker");
const db = admin.firestore();
const fakeIt = () => {
 return db.collection("Music").add({
   username: faker.internet.userName(),
   email: faker.internet.email(),
   avatar: faker.internet.avatar(),
});
};
Array(5).fill(0).forEach(fakeIt);