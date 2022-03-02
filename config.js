 import  firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDUTs8ED2V7TmggYMXGfjV4-z7hOf9PMSw",
  authDomain: "school-attendance-app-7ba18.firebaseapp.com",
  databaseURL: "https://school-attendance-app-7ba18-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-7ba18",
  storageBucket: "school-attendance-app-7ba18.appspot.com",
  messagingSenderId: "579889321691",
  appId: "1:579889321691:web:78627fc2e69957281edefe"
};
 firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  