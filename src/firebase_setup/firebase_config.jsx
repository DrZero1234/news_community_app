const firebaseConfig = {
  apiKey: "AIzaSyCUPBl5Oqq-aY7r66FezDd_q6q0BuaHiHo",

  authDomain: "quora-clone-e3af3.firebaseapp.com",

  projectId: "quora-clone-e3af3",

  storageBucket: "quora-clone-e3af3.appspot.com",

  messagingSenderId: "521604189429",

  appId: "1:521604189429:web:8f24902e28ecddfac349bc",
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return firebaseConfig;
  }
}
