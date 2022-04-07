// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF11fUSemlhaTHpQxLWnPeIiuKi5kbs0I",
    authDomain: "p94rooms.firebaseapp.com",
    databaseURL: "https://p94rooms-default-rtdb.firebaseio.com",
    projectId: "p94rooms",
    storageBucket: "p94rooms.appspot.com",
    messagingSenderId: "663426454170",
    appId: "1:663426454170:web:63c7409270ee6091ea8523"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
  
  function send()
  {
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
        } });  }); }
  getData();
  
  