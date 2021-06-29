var db = firebase.firestore();
db.collection("commands").doc("power-state").set({
  state: 1
})