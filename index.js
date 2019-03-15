// Initialize Firebase
var config = {
    apiKey: "AIzaSyCOAJ4BrTL87tJFlZT6NcdlAF9a_WN6y0A",
    authDomain: "sharecropper-3fafb.firebaseapp.com",
    databaseURL: "https://sharecropper-3fafb.firebaseio.com",
    projectId: "sharecropper-3fafb",
    storageBucket: "sharecropper-3fafb.appspot.com",
    messagingSenderId: "948317379069"
};
firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

document.querySelector("#login").addEventListener("click",function(){

    firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log("ho");
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

});



var firestore = firebase.firestore();
var ref = firestore.doc("users/Personal");








// var b1 = document.querySelector("button");
// b1.addEventListener("click", function () {
//     var text1 = document.querySelector("input").value;
//     ref.set({
//         successfull: text1
//     }).then(function () {
//         console.log("success");
//     }).catch(function (error) {
//         console.log(error);
//     })
// });

// var write = function () {
//     ref.onSnapshot(function (doc) {
//         if (doc && doc.exists) {
//             console.log("hi");
//             const result = doc.data();
//             var p1=document.createElement("p");
//             p1.innerHTML=result.successfull;
//             document.querySelector("body").appendChild(p1);
//         }
//     })
// }
// write();