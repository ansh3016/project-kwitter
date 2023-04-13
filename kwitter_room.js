var firebaseConfig = {
    apiKey: "AIzaSyDSX9YJH9tfmjngXn7b_3vyzOXtZvLmDXM",
    authDomain: "kwitter-c5ff4.firebaseapp.com",
    databaseURL: "https://kwitter-c5ff4-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5ff4",
    storageBucket: "kwitter-c5ff4.appspot.com",
    messagingSenderId: "1046449649619",
    appId: "1:1046449649619:web:4a94c3284867a45ca4a126"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send() {

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}





function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
