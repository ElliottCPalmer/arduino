// var storageRef = firebase.storageRef();
// var mountainsRef = storageRef.child('mountains.png');
// var mountainImageRef = storageRef.child('images/mountains.png');
// mountainsRef.name === mountainImageRef.name;
// mountainsRef.fullPath === mountainImageRef.fullPath;

ref.put(Users/Ellio/Documents/mountains.png).then((snapshot) => {
    console.log('uploaded a file');
});