document.addEventListener('DOMContentLoaded', event => {
    const app = firebase.app();

    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstpost');

    //displays a single post.
    // myPost.onSnapshot(doc => {
    //     const data = doc.data();
    //     document.write( data.title + `<br>`);
    //     document.write( data.createdAt + `<br>`);
    // });

    //simulates a realtime update
    myPost.onSnapshot(doc => {
        const data = doc.data();
        document.querySelector('#title').innerHTML = data.title;  
    });
    
});

function updatePost(e) {
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstpost');
    myPost.update({ title: e.target.value });
};


function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    
    .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        
        console.log(user);
    })
    .catch(console.log('error'));
}


// document.addEventListener('DOMContentLoaded', function() {
//     const loadEl = document.querySelector('#load');
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
//     // // The Firebase SDK is initialized and available here!
//     //
//     // firebase.auth().onAuthStateChanged(user => { });
//     // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
//     // firebase.firestore().doc('/foo/bar').get().then(() => { });
//     // firebase.functions().httpsCallable('yourFunction')().then(() => { });
//     // firebase.messaging().requestPermission().then(() => { });
//     // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
//     // firebase.analytics(); // call to activate
//     // firebase.analytics().logEvent('tutorial_completed');
//     // firebase.performance(); // call to activate
//     //
//     // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
  
//     try {
//       let app = firebase.app();
//       let features = [
//         'auth', 
//         'database', 
//         'firestore',
//         'functions',
//         'messaging', 
//         'storage', 
//         'analytics', 
//         'remoteConfig',
//         'performance',
//       ].filter(feature => typeof app[feature] === 'function');
//       loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
//     } catch (e) {
//       console.error(e);
//       loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
//     }
//   });
