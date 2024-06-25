// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3BgZdfdJGNreMS4OzLYPaG8dP9KkTeaw",
  authDomain: "gsmil07-94089.firebaseapp.com",
  databaseURL: "https://gsmil07-94089-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gsmil07-94089",
  storageBucket: "gsmil07-94089.appspot.com",
  messagingSenderId: "726050984825",
  appId: "1:726050984825:web:7dda2b6defa853245f95a8",
  measurementId: "G-HG1L0DS392"
};
// Initialize Firebase
initializeApp(firebaseConfig);

/* このデータを使って新規登録処理をしてくれたまえよ、の部分*/
function signUpUser(email, password) {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then(function (userInfo) {
      console.log(userInfo);
      location.href = "index.html";
    })
    .catch(function (error) {
      console.log(error);
      $("#message").html(error);
    });
}

$("#signup-button").on("click", function () {
   const email = $("#signup-email").val();
   const password = $("#signup-password").val();
  
   signUpUser(email, password);

});

// もしボタン１を押したら、コンピューターの手のところにランダムで相手の手を表示させ、
// 結果はのところに、勝ちか負けか引き分けを表示させる


$('#btn1').on('click', function() {

  const randomNumber = Math.ceil(Math.random()*3);
  if (randomNumber === 1){
      $("#result1").html('ぐー');
      $("#result2").html('引き分け');
  }else if (randomNumber === 2){
      $("#result1").html('ちょき');
      $("#result2").html('あなたの勝ち');
  }else {
      $("#result").html('パー');
      $("#result2").html('あなたの負け');
  }
})

$('#btn2').on('click', function() {

  const randomNumber = Math.ceil(Math.random()*3);
  if (randomNumber === 1){
      $("#result1").html('ぐー');
      $("#result2").html('あなたの負け');
  }else if (randomNumber === 2){
      $("#result1").html('ちょき');
      $("#result2").html('引き分け');
  }else {
      $("#result").html('パー');
      $("#result2").html('あなたの勝ち');
  }
})
Ss
$('#btn3').on('click', function() {

  const randomNumber = Math.ceil(Math.random()*3);
  if (randomNumber === 1){
      $("#result1").html('ぐー');
      $("#result2").html('あなたの勝ち');
  }else if (randomNumber === 2){
      $("#result1").html('ちょき');
      $("#result2").html('あなたの負け');
  }else {
      $("#result").html('パー');
      $("#result2").html('引き分け');
  }
})

console.log();

// $("#result1").html('ぐー');