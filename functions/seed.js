const admin = require("firebase-admin");
var serviceAccount = require("./service_account");
const { faker } = require("@faker-js/faker");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://music-application-bdc7b-default-rtdb.firebaseio.com'
});

const db = admin.firestore();

const fakeIt = () => {
    return db.collection("Music").add({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
    });
};

Array(5).fill(0).forEach(fakeIt);