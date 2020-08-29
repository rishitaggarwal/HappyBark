import firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyB4pBx-D3HshnsArGvA3IEUx5d604rLWHM",
  authDomain: "happybark-df3ea.firebaseapp.com",
  databaseURL: "https://happybark-df3ea.firebaseio.com",
  projectId: "happybark-df3ea",
  storageBucket: "happybark-df3ea.appspot.com",
  messagingSenderId: "60544881181",
  appId: "1:60544881181:web:ac2e064d7cf190464aacf4"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()