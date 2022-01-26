
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC1WKz5m1gStJ5QwaMYbnATl3px-_7cg80",
      authDomain: "kwitter-f0017.firebaseapp.com",
      databaseURL: "https://kwitter-f0017-default-rtdb.firebaseio.com",
      projectId: "kwitter-f0017",
      storageBucket: "kwitter-f0017.appspot.com",
      messagingSenderId: "925691914125",
      appId: "1:925691914125:web:a241d7cb9ac651a5a0ffc4"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      })

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function redirect(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}
 function logout(){
       localStorage.removeItem("user_name")
       localStorage.removeItem("room_name")
       window.location="index.html"
 }