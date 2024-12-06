import { auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, signOut , getFirestore ,  collection, addDoc , db , getDocs , doc} from "./firebase.js"

let signUp = ()=>{
  let email = document.getElementById("email1").value
  let password = document.getElementById("password1").value
  createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    const user = userCredential.user;
   console.log("SUccessfully SignUp",user);
   sendEmailVerification(auth.currentUser)
   .then(() => {
     console.log("Email verification sent!");
     
   });
   console.log(document.getElementById("email1"));

try {
  const docRef = await addDoc(collection(db, "users"), {
    email :user.email,
   uid : user.uid
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
window.location.href = "web.html";
})
  .catch((error) => {
    const errorCode = error.code;
    console.log("Not SUccessfully SignUp",errorCode);
  });
}

let signup= document.getElementById("sign_up")
signup.addEventListener("click",signUp)


let signIn = ()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {   
    const user = userCredential.user;
    console.log("Login Successfully",user);
  })


  
  .catch((error) => {
    const errorCode = error.code;
   console.log(errorCode);
   
  });
}


let signin= document.getElementById("sign_in")
signin.addEventListener("click",signIn)

onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    console.log(uid , "Already logged In");


  } else {
    console.log("No User Here");
  }
});




// let sendMail = ()=>{
 
// }
// let email = document.getElementById("verification")
// email.addEventListener("click", sendMail)


// let sign_out = ()=>{
//   signOut(auth).then(() => {
//     console.log("Sign-out successful");
    
//   }).catch((error) => {
//     console.log("Have some error", error);
    
//   });
// }


// let signout = document.getElementById("sign_out")
// signout.addEventListener("click", sign_out)



// READ DATA == //GET DATA
let getuser=async()=>{
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id); // Document ID (e.g., luduMIuK1HoeFiAurYV8)
    console.log(doc.data()); // Document data as an object
    OR 
    console.log(doc.id ,doc.data());
  });
}
getuser()