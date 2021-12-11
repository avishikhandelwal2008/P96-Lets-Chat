var firebaseConfig = {
    apiKey: "AIzaSyAtdKtOKh8ZLHPuFhwvVokPI4V-IHwO5fA",
    authDomain: "let-s-chat-f4bf7.firebaseapp.com",
    databaseURL: "https://let-s-chat-f4bf7-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-f4bf7",
    storageBucket: "let-s-chat-f4bf7.appspot.com",
    messagingSenderId: "1030223312454",
    appId: "1:1030223312454:web:f4650b8a6c04250dc0bc47",
    measurementId: "${config.measurementId}"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
             console.log("room name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+ Room_names + "</div><hr>";
             document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirect(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "chat_page.html";
}

function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}