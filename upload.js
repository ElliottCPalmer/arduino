// var storageRef = firebase.storageRef();
// var mountainsRef = storageRef.child('mountains.png');
// var mountainImageRef = storageRef.child('images/mountains.png');
// mountainsRef.name === mountainImageRef.name;
// mountainsRef.fullPath === mountainImageRef.fullPath;

// put(Users/Ellio/Documents/mountains.png).then((snapshot) => {
//     console.log('uploaded a file');
// });

const data = {
    name: 'los angeles',
    state: 'CA',
    country: 'USA'
};

 const res = await db.collection('cities').doc('LA').set(data);