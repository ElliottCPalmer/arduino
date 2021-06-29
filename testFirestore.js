  var docRef = "powerstate";
  var db = firebase.firestore();
  db.collection("users").add({
    first: "AFa",
    last: "Lovelace",
    born: 1815
  })

  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);

  })