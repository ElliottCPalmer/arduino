  var db = firebase.firestore();
  db.collection("users").add({
    first: "AFa",
    last: "Lovelace",
    born: 1815
  })
  var docRef = powerstate
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);

  })