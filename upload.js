var storageRef = firebase.storageRef();
var mountainsRef = storageRef.child('mountains.jpg');
var mountainImageRef = storageRef.child('images/mountains.jpg');
mountainsRef.name === mountainImageRef.name;
mountainsRef.fullPath === mountainImageRef.fullPath;

ref.put(File).then((snapshot) => {
    console.log('uploaded a file');
});